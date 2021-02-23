import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo ='Listado de Personas';
  constructor() { }

  ngOnInit(){
  
  }

  
/* 
  personaAgregada(persona: Persona){
    this._persona.personaAgregada(persona)
  } */
}
