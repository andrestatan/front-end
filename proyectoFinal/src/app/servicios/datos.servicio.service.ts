import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosAtributos } from '../model/datos.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatosService{
 url:'http://dummy.restapiexample.com/';

 constructor(private http:HttpClient){}

 getEmpleadosGeneral():Observable <datosAtributos>{
   return this.http.get <datosAtributos>("http://dummy.restapiexample.com/api/v1/employees")
  }
}
