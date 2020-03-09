import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { persona } from '../persona.modules';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() agregar=new EventEmitter <persona>();
  nombreInput:string;
  apellidoInput:string;

  onAgregarPersona(){
    let persona1=new persona(this.nombreInput,this.apellidoInput);
    this.agregar.emit(persona1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
