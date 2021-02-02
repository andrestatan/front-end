import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private _logging:LoggingServiceService) { }

  saludar = new EventEmitter <Number> ()

  personas: Persona[] = [
  new Persona("Juan", "Perez"), 
  new Persona("Laura", "Juarez")]

  personaAgregada(persona: Persona){
    this._logging.enviarMensajeConsola("PersonaAgregada")
    this.personas.push(persona);
  }
}
