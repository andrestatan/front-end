import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { LoggingServiceService } from './logging-service.service';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private _logging: LoggingServiceService,
  private data: DataService) { }

  saludar = new EventEmitter<Number>()

  personas: Persona[];

    setPersonas(persona: Persona[]){
      this.personas = persona
    }

    obtenerPersona(){
      return this.data.cargarPersonas();
    }

  personaAgregada(persona: Persona) {
    this._logging.enviarMensajeConsola("PersonaAgregada")
    this.personas.push(persona);
    this.data.guardarPersonasPut(this.personas);
  }

  encontrarPersona(indice: number) {
    let persona: Persona = this.personas[indice];
    return persona
  }

  modificarPersona(indice: number, persona: Persona) {
    let persona1 = this.personas[indice]
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1)
  }


}
