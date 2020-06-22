import { Component, OnInit } from '@angular/core';
import { fechas } from '../servicios/fechas.servicio.service';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css','../app.component.css']
})
export class PiePaginaComponent implements OnInit {
  
  constructor(private _fechas:fechas) { }
  fechaActual=this._fechas.getFechaActualString();
  ngOnInit(): void {
  }

  

}
