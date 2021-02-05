import { Component, OnChanges, OnInit } from '@angular/core';
import { presupuesto } from '../sercicios/presupuesto/presupuesto.module';
import { EgresosService } from '../servicios/egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  constructor(private egreso: EgresosService) { }

  egresos: presupuesto[];

  ngOnInit(): void {
    this.egresos = this.egreso.valoresEgresos;
  }

  ngOnChanges(): void {
    
  }

}
