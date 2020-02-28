import { Component } from '@angular/core';
import {persona} from './persona.modules';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listadoPersonas';
  personas:persona[]=[new persona("Andres","Posada"), new persona("David","Cadena")]
  nombreInput:string;
  apellidoInput:string;

  onAgregarPersona(){
    let persona1=new persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }
}
