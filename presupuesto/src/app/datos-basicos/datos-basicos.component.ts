import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.css']
})
export class DatosBasicosComponent implements OnInit {
  titulo:string="Presupuesto Disponible";
  constructor() { }

  ngOnInit(): void {
  }

}
