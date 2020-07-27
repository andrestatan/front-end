import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatosService } from '../servicios/datos.servicio.service';
import { datosAtributos } from '../model/datos.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AdicionComponent } from '../adicion/adicion.component';


@Component({
  selector: 'app-consulta-personas',
  templateUrl: './consulta-personas.component.html',
  styleUrls: ['./consulta-personas.component.css','../app.component.css']
})
export class ConsultaPersonasComponent implements OnInit {
  titulo='Tabla Resultados';
  @Output() envio= new EventEmitter <any>();
  atributos;
  constructor(private datos:DatosService, public dialog:MatDialog) { }
  valorFinal
  cambio: boolean = false;
  eliminar: boolean =false;
  ngOnInit(){
    this. procesarDatos();
  }

  procesarDatos(){this.datos.getEmpleadosGeneral().subscribe((data) =>{ this.atributos=data['data']})}
  
 verificacionAdicion(){
   const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus =true;
  dialogConfig.width= "50%";
  this.dialog.open(AdicionComponent,dialogConfig)
 }
 
 verificacionEliminacion(): boolean{
  this.eliminar=(!this.eliminar)?true:false;
  this.validacionError();
  return this.eliminar;
 }

 validacionError(){
   if(this.cambio && this.eliminar){
     window.alert("no puedes activar ambos elementos");
     this.cambio=false;
     this.eliminar=false;
   }
 }
} 
