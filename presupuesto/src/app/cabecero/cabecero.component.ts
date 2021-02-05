import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../servicios/egresos.service';
import { IngresosService } from '../servicios/ingresos.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor(private ingreso: IngresosService, private egreso: EgresosService) { 

  }

  ingresos: number;
  egresos: number;

  ngOnInit(): void {
    this.inicializacion();
  }

  inicializacion(){ 
    this.ingresos = this.ingreso.totalIngresos;
    this.egresos = this.egreso.totalesEgresos;
  }

  

}
