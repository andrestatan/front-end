import { Injectable } from '@angular/core';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  constructor() { }

  egresos: presupuesto [] = [
    {descripcion: "Renta departamento", valor: 900},
    {descripcion: "Ropa", valor: 435.28}
  ]

  capturaValores(nuevosDatos: presupuesto){
    this.egresos.push(nuevosDatos)
  }
}
