import { Component, OnInit, Input } from '@angular/core';
import { datosAtributos } from '../model/datos.model';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','../app.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private datos:datosAtributos) {}
  id: Array<string>=[];
  salario: Array <string>=[];
  edad: Array <string> = [];
  imagen: Array <string> =[];
  nombre: Array <string>=[];
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