import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  personas : Persona[] =[];
  titulo ='Listado de Personas';
  constructor(private _persona:PersonasService){ }

  ngOnInit(){
    this.personas = this._persona.personas;
  }

  
/* 
  personaAgregada(persona: Persona){
    this._persona.personaAgregada(persona)
  } */
}
