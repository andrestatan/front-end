import { EgresosService } from './../servicios/egresos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  egresos=[];

  constructor(private EgresosService:EgresosService) { }

  ngOnInit() {
    this.egresos=this.EgresosService.egresos;
  }

}
