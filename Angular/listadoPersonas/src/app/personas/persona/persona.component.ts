import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() personaElemento: Persona;
  @Input() indice: number;
  
  constructor(private _persona: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this._persona.saludar.emit(this.indice)
  }

}
