import { Injectable } from '@angular/core';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  constructor() { }

  ingresos: presupuesto [] = [
    {descripcion: "Salario", valor: 2100},
    {descripcion: "Venta coche", valor: 1500}
  ]

  capturaValores(nuevosDatos: presupuesto){
    this.ingresos.push(nuevosDatos)
  }

  eliminacionValores(eliminacion: number){
    if(eliminacion < this.ingresos.length){
      this.ingresos.splice(eliminacion,1);
    } else {
      window.alert("verifique la ubicacion del valor a eliminar")
    }

  }
}
