import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../servicios/data.service';
import { IngresosService } from '../servicios/ingresos.service';
import { presupuesto } from '../servicios/presupuesto.model';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(private datos:DataService) { }

  ngOnInit(): void {
  }

  @ViewChild('descripcion') descripcion: ElementRef  = undefined;
  @ViewChild('valor') valor : ElementRef = undefined;
  @ViewChild('funcion') funcion : ElementRef;
  valores: presupuesto;

  capturaDatos(){ 
    let descripcion = this.descripcion.nativeElement.value;
    let valor = parseInt(this.valor.nativeElement.value);
    let funcion= this.funcion.nativeElement.value;
    this.valores = {descripcion,valor}

    if( descripcion.length > 1 && !isNaN(valor)){
        this.validarInformacion( this.valores, funcion)
      } else {
        window.alert("Debe diligenciar todos los campos")
      }
  } 

  validarInformacion(presupuesto: presupuesto, tipoOperacion: string){ 
    this.datos.validacionesDatos(presupuesto, tipoOperacion)
  }

}
