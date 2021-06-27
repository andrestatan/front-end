import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otras-personas',
  templateUrl: './otras-personas.component.html',
   styleUrls: ['./otras-personas.component.css']
})
export class OtrasPersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre = 'Jhonnatan Andres';
apellido = 'Posada Cadena';
  private edad = 28;

  getEdad():number{
    return this.edad;
  }

}
