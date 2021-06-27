import { Injectable } from '@angular/core';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor() { }

  ingresos : presupuesto [] = [new presupuesto("Salario", 2100), new presupuesto("Venta coche", 1500)]
  
}
