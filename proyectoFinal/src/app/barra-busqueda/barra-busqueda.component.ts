import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css','../app.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
