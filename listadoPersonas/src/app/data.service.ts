import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _client: HttpClient) { }

  url="https://bdclient-df8a4.firebaseio.com";

  cargarPersonas(){
    return this._client.get(this.url+'/datos.json')
  }

  //Guardar Personas

  guardarPersonasPost( personas: Persona[]){
    this._client.post(this.url+'/datos.json',personas)
    .subscribe(
      response => {
        console.log("resultado de Guardar "+ response)
      },
      error=> console.log("error al guardar Tarado "+ error)
    )
  }

  guardarPersonasPut( personas: Persona[]){
    this._client.put(this.url+'/datos.json',personas)
    .subscribe(
      response => {
        console.log("resultado de Guardar "+ response)
      },
      error=> console.log("error al guardar Tarado "+ error)
    )
  }


}
