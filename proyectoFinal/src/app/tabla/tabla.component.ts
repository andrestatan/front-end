import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { datosAtributos } from '../model/datos.model';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  @Input ('arreglo') arreglo;
  @Input ('encabezado') encabezado;
  columnasMostrar: any =["id","employee_name","employee_age","employee_salary","profile_image"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(){
    this.confPaginacion();
  }

  MuestraDatos(){
    if(this.arreglo != undefined){
      window.alert("Datos Encontrados")
    } else {window.alert("Datos No Encontrados")}
  }

  confPaginacion(){
    
  }
}