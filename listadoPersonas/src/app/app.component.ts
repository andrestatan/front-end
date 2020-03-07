import { Component } from '@angular/core';
import {persona} from './persona.modules';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listadoPersonas';
  personas:persona[]=[new persona("Andres","Posada"), new persona("David","Cadena")]
 
  onAgregar(persona:persona){
    this.personas.push(persona);
  }

}
