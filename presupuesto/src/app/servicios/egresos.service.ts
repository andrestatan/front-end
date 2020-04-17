import { Egresos } from './egresos.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  egresos:Egresos[]=[new Egresos("casa",3000), new Egresos("comida",5000)]

  constructor() {}

  adicionarEgreso(egresos:Egresos){
  this.egresos.push(egresos);
  }

  sumaEgresoTotal(){
    let sumaEgresos = 0;
    for (let numero of this.egresos){
       sumaEgresos += numero.valor;
      }
      return sumaEgresos
 }

}
