import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { IngresoService } from '../servicio/ingreso.service';
import { presupuesto } from '../servicio/presupuesto.model';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private servicio: ServicioService, private ingreso: IngresoService) { }

  ingresos: presupuesto [] = [];

  @Output() emisorDatos = new EventEmitter <number> ();

  ngOnInit(): void {
    this.ingresos = this.ingreso.ingresos
  }

  eliminacion(index: number){
    this.servicio.eliminacionDatos(index, 'ing');
    this.calculoValor()
  }

  calculoValor(){
    let valorEnviar: number =this.servicio.calculovaloresIngreso();
    this.emisorDatos.emit(valorEnviar);
  }

}
