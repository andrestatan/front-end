import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { EgresosService } from '../servicios/egresos.service';
import { IngresosService } from '../servicios/ingresos.service';
import { presupuesto } from '../servicios/presupuesto.model';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnChanges {

  constructor(private ing: IngresosService, private egr: EgresosService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.updateIngreso();
    this.updateEgreso();
  }

  @ViewChild('descripcion') descripcion: ElementRef  = undefined;
  @ViewChild('valor') valor : ElementRef = undefined;
  @ViewChild('funcion') funcion : ElementRef;
  @Output() envioValorIngreso = new EventEmitter <number> ();
  @Output() envioValorEgreso = new EventEmitter <number> ();
  @Output() envioValorDisponible = new EventEmitter <number> ();
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
    this.envioDisponible();
    if(tipoOperacion == "ing"){
      this.ing.capturaValores(presupuesto)
      this.envioIngreso();
    } else {
      this.egr.capturaValores(presupuesto)
      this.envioEgreso();
    }
  }

  envioIngreso(){
    this.envioValorIngreso.emit(this.ing.obtencionValorIngreso())
  }

  envioEgreso(){
    this.envioValorEgreso.emit(this.egr.obtencionValorEgreso())
  }

  envioDisponible(){
  let total = this.ing.obtencionValorIngreso() - this.egr.obtencionValorEgreso()
    this.envioValorDisponible.emit(total)
  }

  updateIngreso(tipo?: boolean){
    if(tipo){
      this.envioIngreso();
      this.envioDisponible();
    }
    
  }

  updateEgreso(tipo?: boolean){
    if(tipo){
      this.envioEgreso();
      this.envioDisponible();
    }
    
  }
}
