import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosAtributos } from '../model/datos.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatosService{
 url:'https://jsonplaceholder.typicode.com';

 constructor(private http:HttpClient){}

 getEmpleadosGeneral(): Observable <datosAtributos>{
   return this.http.get <datosAtributos>("https://jsonplaceholder.typicode.com/posts")
  }

addEmpleadosGeneral(datosAtributos : datosAtributos){
  this.http.post("https://jsonplaceholder.typicode.com/posts",datosAtributos)
  .subscribe(a=>{
    return a;
  }, (error)=>{
      window.alert("Metodo Post No funcional")
  })}
}
