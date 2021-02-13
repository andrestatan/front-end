import { Component, OnChanges, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit, OnChanges {

  constructor(private service: ServicioService) { }

  sumaIngreso: number;
  sumaEgresos: number;
  valorDisponible: number;

  ngOnInit(): void {
    this.inicializacion()
  }

  ngOnChanges(){ }

  inicializacion(){
    this.sumaIngreso = this.service.calculovaloresIngreso();
    this.sumaEgresos = this.service.calculovaloresEgreso();
    this.valorDisponible = this.service.calculoValorDisponible();
  }

}
