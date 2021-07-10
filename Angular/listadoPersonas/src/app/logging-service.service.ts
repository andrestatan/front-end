import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  enviarMensajeConsola(mensaje: string){
   console.log(mensaje)
  }
}
