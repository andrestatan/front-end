import { Injectable } from '@angular/core';
import { IngresosService } from './ingresos.service';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  constructor(private ing: IngresosService) { }

  primerVez: boolean = true;
  valor: number= undefined;
  egresos: presupuesto [] = [
    {descripcion: "Renta departamento", valor: 900},
    {descripcion: "Ropa", valor: 435.28}
  ]

  capturaValores(nuevosDatos: presupuesto){
    this.egresos.push(nuevosDatos)
    this.obtencionTotales();
  }

  eliminacionValores(eliminacion: number){
    if(eliminacion < this.egresos.length){
      this.egresos.splice(eliminacion,1);
      this.obtencionTotales();
    } else {
      window.alert("verifique la ubicacion del valor a eliminar")
    }

  }

  obtencionTotales(): number{ 
    this.egresos.forEach(ingreso=>{ 
      if(this.primerVez){
        this.valor=ingreso.valor;
        this.primerVez = false;
      } else {
        this.valor += ingreso.valor;
      }
    })

    if(this.egresos.length == 0){
      this.valor = 0;
    }

    this.primerVez = true;
    this. calculoPorcentajes()
    return this.valor;
  }

  obtencionValorEgreso(): number{ 
    return this.obtencionTotales();
  }

  calculoPorcentajes(){ 
    let valorEgreso= this.valor * 100
    let valorNeto: number;
    return valorNeto= valorEgreso / this.ing.valor

  }
  
}
