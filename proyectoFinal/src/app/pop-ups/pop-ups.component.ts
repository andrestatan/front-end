import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AlertasComponent } from './alertas/alertas.component';

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})
export class PopUpsComponent implements OnInit {

  ngOnInit(): void {}

  ngOnChanges(): void {
 
    this.verificacionManipulacionDatos();
    
  }

  constructor(public dialog:MatDialog ) { }

  icono: string;
  titulo: string;
  newUser: string;
  id: string;
  nombre: string;
  descripcion : string;
  cambio: boolean = false;
  eliminar: boolean = false;
  @Input() tipoDato: string;
  

  verificacionManipulacionDatos(){ 
    switch(this.tipoDato){
      case "adicion": 
      this.icono="add_circle_outline"
      this.titulo="Agregar Nuevo"
      this.newUser="Agregar un nuevo Usuario"
      this.id="Id de Usuario";
      this.nombre="Nombre de Usuario";
      this.descripcion="Descripcion";
      break;
      case "buscar": 
      this.icono="add_circle_outline"
      this.titulo="Buscar un Registro"
      this.newUser="Buscar"
      this.id="Id de Usuario";
      this.nombre="Nombre de Usuario";
      this.descripcion="Descripcion";
      break;
      case "eliminar": 
      this.icono="add_circle_outline"
      this.titulo="Eliminar un Registro"
      this.newUser="Eliminar Usuario"
      this.id="Id de Usuario";
      this.nombre="Nombre de Usuario";
      this.descripcion="Descripcion";
      break;
    }
    }

    validacionDeDatosPopUp(valorPopUp: boolean){
      window.alert(valorPopUp)
      if(valorPopUp){
        
      }
    }
    
}
