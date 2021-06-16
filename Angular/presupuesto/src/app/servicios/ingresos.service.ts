import { Injectable } from '@angular/core';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  constructor() { }

  valor: number = undefined;
  primerVez: boolean = true;

  ingresos: presupuesto [] = [
    {descripcion: "Salario", valor: 2100},
    {descripcion: "Venta coche", valor: 1500}
  ]

  capturaValores(nuevosDatos: presupuesto){
    this.ingresos.push(nuevosDatos)
    this.obtencionTotales();
  }

  eliminacionValores(eliminacion: number){
    if(eliminacion < this.ingresos.length){
      this.ingresos.splice(eliminacion,1);
      this.obtencionTotales();
    } else {
      window.alert("verifique la ubicacion del valor a eliminar")
    }

  }

  obtencionTotales(): number { 
    this.ingresos.forEach(ingreso=>{
      if(this.primerVez){
        this.valor=ingreso.valor;
        this.primerVez = false;
      } else {
        this.valor += ingreso.valor;
      }
    })

    if(this.ingresos.length == 0){
      this.valor = 0;
    }
    this.primerVez = true;
    return this.valor;
  }

  obtencionValorIngreso(): number{
    return this.obtencionTotales();
  }
}
