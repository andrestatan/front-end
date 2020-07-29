import { Component, OnInit, Input } from '@angular/core';
import { datosAtributos } from '../model/datos.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','../app.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private atributo:datosAtributos, private table:MatTableModule) {}
  id = this.atributo.id;
  salario =this.atributo.employee_salary;
  edad = this.atributo.employee_age;
  imagen = this.atributo.profile_image;
  nombre = this.atributo.employee_name;
  tabla: Array <string> =[];
  tituloTablas:Array <string>=["Id","Nombre","Edad","Salario","Imagen"]
  @Input ('arreglo') arreglo;
  @Input ('encabezado') encabezado;

  ngOnInit(){}

  MuestraDatos(){
    if(this.arreglo != undefined){
      window.alert("Datos Encontrados")
    } else {window.alert("Datos No Encontrados")}
  }

}