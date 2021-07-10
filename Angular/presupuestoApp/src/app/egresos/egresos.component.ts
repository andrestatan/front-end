import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EgresoService } from '../servicio/egreso.service';
import { presupuesto } from '../servicio/presupuesto.model';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  constructor(private egreso: EgresoService, private data: ServicioService) { }

  egresos: presupuesto [];
  @Output() emision = new EventEmitter <number> ();


  ngOnInit(): void {
    this.egresos = this.egreso.egresos;
  }

  eliminacion (index){
    this.data.eliminacionDatos(index, 'egr')
    this.calculovalor();
  }

  calculovalor(){ 
    let valorEnviar= this.data.calculovaloresEgreso();
    this.emision.emit(valorEnviar)
  }

  

}
