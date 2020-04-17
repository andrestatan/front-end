import { EgresosService } from './servicios/egresos.service';
import { IngresosService } from './servicios/ingresos.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Presupuesto Disponible:';
  valorInicial=0;
  ingresosTotal=0;
  egresosTotal=0;
  valorPrincipal:number=100000;

  constructor(private IngresosService:IngresosService, private EgresosService:EgresosService){ }

  ngOnInit(){
    this.ingresosTotal=this.IngresosService.ingresoTotal();
    this.egresosTotal=this.EgresosService.sumaEgresoTotal();
  }

  totalValores(){
    let totalDisponible=0;
    totalDisponible=+this.valorPrincipal+this.ingresosTotal-this.egresosTotal
    return  totalDisponible
  }
}
