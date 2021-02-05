import { Injectable, OnChanges, OnInit } from '@angular/core';
import { presupuesto } from '../sercicios/presupuesto/presupuesto.module';

@Injectable({
  providedIn: 'root'
})
export class IngresosService implements OnChanges{

  constructor() { this.totales();}

  ngOnChanges(): void {
    
  }

  totalIngresos: number;
  valoresIngresos: presupuesto[] = [   
    {descripcion: "Salario", valor: 2100},
    {descripcion: "Venta coche", valor: 1500}
  ]

  obtencionValor(registro: presupuesto){ 
    this.valoresIngresos.push(registro)
    this.totales();
  }

  totales(){
    this.valoresIngresos.forEach(valores => {
      if(this.totalIngresos == undefined){
        this.totalIngresos = valores.valor;
      }else {
        this.totalIngresos += valores.valor;
      }
    });
    return this.totalIngresos;
  }
}
