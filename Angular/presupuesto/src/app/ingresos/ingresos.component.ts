import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngresosService } from '../servicios/ingresos.service';
import { presupuesto } from '../servicios/presupuesto.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private ingreso: IngresosService) { }

  ngOnInit(): void {
    this.ingresos = this.ingreso.ingresos;
  }

  @Output() validacion = new EventEmitter <boolean>();

  ingresos: presupuesto[];

  eliminacionValor(i){ 
    let comprobante:boolean= true
    this.ingreso.eliminacionValores(i);
    this.validacion.emit(comprobante);
  }

  

}
