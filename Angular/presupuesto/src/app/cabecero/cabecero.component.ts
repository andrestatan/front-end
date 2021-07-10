import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EgresosService } from '../servicios/egresos.service';
import { IngresosService } from '../servicios/ingresos.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit, OnChanges {

  constructor(private ing:IngresosService, private egr:EgresosService) {}

  ingresos: number;
  egresos: number;
  disponible: number;
  porcentaje: number;

  ngOnInit(){
    this.inicializacion();
  }

  ngOnChanges() {
    this.inicializacion();
  }

  inicializacion(){ 
    this.ingresos = this.ing.obtencionValorIngreso();
    this.egresos = this.egr.obtencionValorEgreso();
    this.porcentaje = this.egr.calculoPorcentajes();
    this.disponible= this.ingresos - this.egresos;
  }

}
