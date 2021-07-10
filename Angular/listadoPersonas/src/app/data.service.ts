import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _client: HttpClient, private firebase:FirebaseService,) { }

  url = "https://bdclient-df8a4.firebaseio.com/";

  cargarPersonas() {
    const token: string= this.firebase.getIdToken();
    return this._client.get(this.url + 'datos.json?auth='+token)
  }

  //Guardar Personas

  guardarPersonasPost(personas: Persona[]) {
    const token : string = this.firebase.getIdToken();
    this._client.post(this.url + 'datos.json?auth=' + token, personas)
      .subscribe(
        response => {
          let data= [];
          data= Object.values(response)
          console.log("resultado de Guardar con post")
          data.forEach(element => {
          console.log('nombre: '+element.nombre+' '+element.apellido)
          });
        },
        error => console.log("error al guardar Tarado " + error)
      )
  }

  guardarPersonasPut(personas: Persona[]) {
    const token : string = this.firebase.getIdToken();
    this._client.put(this.url + 'datos.json?auth=' + token, personas)
      .subscribe(
        response => { 
          let data= [];
          data= Object.values(response)
          console.log("resultado de Guardar con post")
          data.forEach(element => {
          console.log('nombre: '+element.nombre+' '+element.apellido)
          })
        },
        error => console.log("error al guardar Tarado " + error)
      )
  }

  ModificarPersona(personas: Persona, indice: number) {
    const token : string = this.firebase.getIdToken();
    this._client.put(this.url + 'datos/' + indice + '.json?auth='+token, personas)
      .subscribe(
        response => {
          let data= [];
          data= Object.values(response)
          console.log("resultado al editar " + data)
        },
        error => console.log("error al editar Tarado " + error)
      )
  }

  EliminarPersona(indice: number) {
    const token : string = this.firebase.getIdToken();
    this._client.delete(this.url + 'datos/' + indice + '.json?auth='+token)
      .subscribe(
        response => {
          if(response != null){
            let data= Object.values(response)
            console.log("resultado al eliminar " + data)
          }
        },
        error => console.log("error al eliminar Tarado " + error)
      )
  }


}
