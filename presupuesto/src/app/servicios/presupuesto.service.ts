import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor() { }

  disponible: number;


  capturaDatos(producto: string, descripcion: string, valor: number){
     if(producto === 'egr'){
       this.obtenerEgresos(descripcion,valor);
     }else{
       this.obtenerIngresos(descripcion,valor);
     }
  }

  obtenerIngresos(descripcion:string, valor:number){
    window.alert("Ingresos "+descripcion+" "+valor)
  }

  obtenerEgresos(descripcion:string, valor:number){
    window.alert("Egresos "+descripcion+" "+valor)
  }

  calcularPorcentaje(){

  }


}
