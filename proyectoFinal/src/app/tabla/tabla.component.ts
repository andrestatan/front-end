import { Component, OnInit, Input } from '@angular/core';
import { datosAtributos } from '../model/datos.model';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private datos:datosAtributos) {}
  nombre=this.datos.employee_name;
  edad=this.datos.employee_age;
  id=this.datos.id;
  sueldo=this.datos.employee_salary;  
  arregloNombre: Array <string>=[];
  @Input ('arreglo') arreglo;
  @Input ('encabezado') encabezado;

  ngOnInit(): void {}

  MuestraDatos(){

    if(this.arreglo != undefined){
      for(let a of this.arreglo){
        this.arregloNombre.push(a.employee_name)
      }

    }
  }
}