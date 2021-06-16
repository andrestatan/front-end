import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
  }

  @Output() emisorDatos = new EventEmitter <number> ();
  @Output() emision = new EventEmitter <number> ();
  @Output() emisionDisponible = new EventEmitter <number> ();
  @ViewChild ('descripcion') descripcion : ElementRef;
  @ViewChild ('valor') valor : ElementRef;
  @ViewChild ('tipo') tipo : ElementRef;
  validacion: boolean;


  obtencionValores(){
    let info = this.descripcion.nativeElement.value;
    let valor = parseInt(this.valor.nativeElement.value);
    let tipo = this.tipo.nativeElement.value;
    this.servicio.adicionDatos(info,valor,tipo);
    this.calculoValorIngreso();
    this.calculovalorEgreso();
    this.calculoValorDisponible()

  }

  calculoValorIngreso(){
    let valorEnviar: number =this.servicio.calculovaloresIngreso();
    this.emisorDatos.emit(valorEnviar);
  }
  
  calculovalorEgreso(){ 
    let valorEnviar= this.servicio.calculovaloresEgreso();
    this.emision.emit(valorEnviar)
  }

  calculoValorDisponible(){
    let disponible = this.servicio.calculoValorDisponible();
    this.emisionDisponible.emit(disponible)
  }

  

}
