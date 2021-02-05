import { Injectable, OnInit } from '@angular/core';
import { presupuesto } from '../sercicios/presupuesto/presupuesto.module';
import { ValoresComponent } from '../valores/valores.component';

@Injectable({
  providedIn: 'root'
})
export class EgresosService implements OnInit{

  constructor() {  this.totales()}

  ngOnInit(): void {
   
  }

  valoresEgresos: presupuesto [] = [ 
    {descripcion: "Renta departamento", valor: 900},
    {descripcion: "Ropa", valor: 435.28}
  ]
  totalesEgresos: number;

  obtencionValor(registro: presupuesto){
    this.valoresEgresos.push(registro)
    this.totales()
  }

  totales(){ 
    this.valoresEgresos.forEach(valores => {
      if(this.totalesEgresos == undefined){
        this.totalesEgresos = valores.valor;
      }else{
        this.totalesEgresos += valores.valor;
      }
    });
    return this.totalesEgresos;
  }


}
