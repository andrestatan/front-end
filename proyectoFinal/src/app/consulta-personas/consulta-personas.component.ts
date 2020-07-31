import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatosService } from '../servicios/datos.servicio.service';
import { datosAtributos } from '../model/datos.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AdicionComponent } from '../adicion/adicion.component';
import { EliminacionComponent } from '../eliminacion/eliminacion.component';
import { PopUpsComponent } from '../pop-ups/pop-ups.component';


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
    this.datos.getEmpleadosGeneral().subscribe((data) =>{
      this.atributos=data})

  }

  
 verificacionAdicion(){
   const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus =false;
  dialogConfig.width= "50%";
  this.dialog.open(AdicionComponent,dialogConfig);
  this.cambio=true;
  this.validacionError()
 }
 
 verificacionEliminacion(){
  const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus =false;
  dialogConfig.width= "50%";
  this.dialog.open(EliminacionComponent,dialogConfig);
  this.eliminar=true;
  this.validacionError()
 }

 validacionError(){
   if(this.cambio && this.eliminar){
     window.alert("no puedes activar ambos elementos");
     const dialogConfig= new MatDialogConfig();
     dialogConfig.disableClose=false;
     dialogConfig.role="alertdialog";
     dialogConfig.width= "50%";
     this.dialog.open(PopUpsComponent,dialogConfig);
     this.cambio=false;
     this.eliminar=false;
   }
 }
} 
