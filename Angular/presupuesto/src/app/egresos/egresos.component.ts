import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EgresosService } from '../servicios/egresos.service';
import { presupuesto } from '../servicios/presupuesto.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  constructor(private egreso: EgresosService) { }

  ngOnInit(): void {
    this.valoresEgresos= this.egreso.egresos;
  }
  @Output() validacion = new EventEmitter <boolean>();

  valoresEgresos: presupuesto [];

  eliminacionValor(i){ 
    let comprobante:boolean= true
    this.egreso.eliminacionValores(i);
    this.validacion.emit(comprobante);
  }
}
