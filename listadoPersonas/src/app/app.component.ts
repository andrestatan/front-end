import { Component, OnInit } from '@angular/core';
import {persona} from './persona.modules';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { servicio } from './servicio.service';
import { personaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [servicio, personaService]
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas:persona[]=[];

  constructor(private servicio:servicio, private personaService:personaService){}


ngOnInit(): void {
this.personas=this.personaService.personas;
}

}
