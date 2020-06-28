import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.servicio.service';
import { datosAtributos } from '../model/datos.model'

@Component({
  selector: 'app-consulta-personas',
  templateUrl: './consulta-personas.component.html',
  styleUrls: ['./consulta-personas.component.css','../app.component.css']
})
export class ConsultaPersonasComponent implements OnInit {
  titulo='Tabla Resultados';
  atributos;
  constructor(private datos:DatosService) { }
  valorFinal
  ngOnInit(){this.procesarDatos()}

  procesarDatos(){
    this.datos.getEmpleadosGeneral().subscribe(
      (data) =>{
        this.atributos=data['data']
     })
    }
} 
