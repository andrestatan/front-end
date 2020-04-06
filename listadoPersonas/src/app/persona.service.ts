import { persona } from './persona.modules';
import { servicio } from './servicio.service';
import { Injectable } from '@angular/core';

@Injectable()

export class personaService{
  personas:persona[]=[new persona("Andres","Posada"), new persona("David","Cadena")]

constructor(private servicio:servicio){}

agregarPersona (person:persona){
  this.personas.push(person);
   this.servicio.imprimirConsola("El mensaje de adicion, de nombre: "+person.nombre+" y apellido: "+person.apellido+" Esto hecho desde un Servicio");
}
}
