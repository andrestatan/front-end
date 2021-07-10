import { Injectable, OnChanges } from '@angular/core';
import { EgresosService } from './egresos.service';
import { IngresosService } from './ingresos.service';
import { presupuesto } from './presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ing: IngresosService, private egr:EgresosService) { }


  valorDescripcion: string = undefined;
  valorValor: number= undefined;

  validacionesDatos(valores: presupuesto, tipoOperacion: string){

    if(tipoOperacion == "ing"){
      
    } else {
      
    }
  }


  

  

 




}
