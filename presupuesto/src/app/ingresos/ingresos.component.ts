
import { IngresosService } from './../servicios/ingresos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})


export class IngresosComponent implements OnInit {
  ingresos=[];


  constructor(private IngresosService:IngresosService) {

   }

  ngOnInit() {
    this.ingresos=this.IngresosService.ingresos;
  }

}
