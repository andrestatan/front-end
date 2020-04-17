import { Ingresos } from './ingresos.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  ingresos: Ingresos[]=[new Ingresos("arriendo",5300), new Ingresos("carro",10000)]

  constructor() { }

  agregarIngresos(ingress:Ingresos){
    this.ingresos.push(ingress);
  }

  ingresoTotal(){
    let sumaIngresos= 0;
    for (let numero of this.ingresos){
    sumaIngresos += numero.valor;
  }
  return sumaIngresos;
  }

  }
