import { Injectable } from '@angular/core';
import { EgresoService } from './egreso.service';
import { IngresoService } from './ingreso.service';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private ingreso: IngresoService, private egreso: EgresoService) { }

  informacion: presupuesto [] = [];
  descripcion: string= undefined;
  valor: number= undefined;
  tipo: string = undefined;

  adicionDatos(informacion: string, valor: number, tipo: string){
    if(informacion != "" && !isNaN(valor)){
    if(tipo == 'ing'){
      this.ingreso.ingresos.push(new presupuesto(informacion,valor));
      this.calculovaloresIngreso();
    } else {
      this.egreso.egresos.push(new presupuesto(informacion,valor));
      this.calculovaloresEgreso();
       }
    } else {
      window.alert("Ingrese todos los Datos")
    }
  }

  eliminacionDatos(index: number, tipo: string){
    if(tipo == 'ing'){
      this.ingreso.ingresos.splice(index,1);
      this.calculovaloresIngreso();
    } else {
      this.egreso.egresos.splice(index,1);
      this.calculovaloresIngreso();
       }
  }

  calculovaloresIngreso(): number{ 
    let ingresosArray: number = 0;
    this.ingreso.ingresos.forEach(ing =>{
      ingresosArray += ing.valor
    })
    return ingresosArray
  }

  calculovaloresEgreso(): number{
    let egresosArray: number = 0; 
    this.egreso.egresos.forEach(egr =>{
      egresosArray += egr.valor
    })
    return egresosArray;
  }

  calculoValorDisponible(): number{ 
    let valorDisponible: number = this.calculovaloresIngreso() - this.calculovaloresEgreso();
    return valorDisponible;

  }


}
