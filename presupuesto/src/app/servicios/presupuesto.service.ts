import { Injectable } from '@angular/core';
import { presupuesto } from '../sercicios/presupuesto/presupuesto.module';
import { EgresosService } from './egresos.service';
import { IngresosService } from './ingresos.service';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor(private ingresos: IngresosService, private egresos: EgresosService ) { }

  disponible: number;

  capturadatos: presupuesto;

  capturaDatos(producto: string, descripcion: string, valor: number){
     if(producto === 'egr'){
       this.obtenerEgresos(descripcion,valor);
     }else{
       this.obtenerIngresos(descripcion,valor);
     }
  }

  obtenerIngresos(descripcion:string, valor: number){
    this.capturadatos = {descripcion: descripcion, valor: valor};
    this.ingresos.obtencionValor(this.capturadatos)
    
  }

  obtenerEgresos(descripcion:string, valor:number){
    this.capturadatos = {descripcion: descripcion, valor: valor};
    this.egresos.obtencionValor(this.capturadatos)
  }

  calcularPorcentaje(){

  }


}
