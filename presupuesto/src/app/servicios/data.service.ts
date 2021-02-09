import { Injectable } from '@angular/core';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  valorDescripcion: string = undefined;
  valorValor: number= undefined;

  validacionesDatos(valores: presupuesto, tipoOperacion: string){

  }
}
