import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  habilitado = false;
  mensaje = 'No se ha agregado ninguna Persona';
  titulo ='Escultor';

  validacionCampo(){
    this.mensaje = 'Persona Agregada';
  }

 /* modificarTitulo(titulo: Event){
    this.titulo = (<HTMLInputElement>titulo.target).value
  }*/
}
