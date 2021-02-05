import { Component, OnInit } from '@angular/core';
import { presupuesto } from '../sercicios/presupuesto/presupuesto.module';
import { IngresosService } from '../servicios/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private ingreso: IngresosService) { }

   ingresos: presupuesto[];

  ngOnInit(): void {
    this.ingresos= this.ingreso.valoresIngresos;
  }

}
