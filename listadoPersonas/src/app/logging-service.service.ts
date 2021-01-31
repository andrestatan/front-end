import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  enviarMensajeConsola(mensaje: string){
    window.alert(mensaje)
  }
}
