import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css','../app.component.css']
}

export class BienvenidoComponent implements OnInit {
  titulo="Introduccion general";

  constructor() { }

  ngOnInit(): void {
  }

}
