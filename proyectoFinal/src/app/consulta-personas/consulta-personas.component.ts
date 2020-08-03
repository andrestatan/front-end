import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatosService } from '../servicios/datos.servicio.service';
import { PopUpsComponent } from '../pop-ups/pop-ups.component';

@Component({
  selector: 'app-consulta-personas',
  templateUrl: './consulta-personas.component.html',
  styleUrls: ['./consulta-personas.component.css','../app.component.css']
})
export class ConsultaPersonasComponent implements OnInit {
  titulo='Tabla Resultados';
  atributos;
  adicionar: boolean;
  buscar: boolean;
  eliminar: boolean;
  active: boolean = false;
  tipoDato: string;

  @Output() envio= new EventEmitter <any>();
  
  constructor(private datos:DatosService, private PopUp:PopUpsComponent) { }
    
  ngOnInit(){

    this.datos.getEmpleadosGeneral().subscribe((data) =>{
      this.atributos=data})

    this.iniciacionIconos();

  }

  validacionChecks(a: string){
    switch(a){
      case "adicion": 
      this.adicionar=false;
      this.buscar=true;
      this.eliminar=true;
      break;
      case "buscar": 
      this.adicionar=true;
      this.buscar=false;
      this.eliminar=true;
      break;
      case "eliminar": 
      this.adicionar=true;
      this.eliminar=false;
      this.buscar=true;
      break;
    }
  }

  validacionDatosPopUp(valor: string){
    if(valor != undefined){
      return this.tipoDato=valor;
    } else {
      window.alert("Valor no encontrado")
    }
    
  }

  iniciacionIconos(){
    this.adicionar=false;
    this.eliminar=false;
    this.buscar=false;
  }

} 
