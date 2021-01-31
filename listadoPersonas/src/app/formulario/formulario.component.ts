import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() personaCreada = new EventEmitter <Persona> ();

  //-------------------------UTILIZANDO TWO WAY BINDING

  /* nombreInput = '';
  apellidoInput = ''; 
  
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);
  }  */

  //---------------------- UTILIZANDO LOCAL REFERENCE

 /*  agregarPersona(nombreRef: HTMLInputElement, apellidoRef: HTMLInputElement){
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    this.personaCreada.emit(persona1);
  } */

  // -----------------------UTILIZANDO VIEWCHILD

  @ViewChild('nombreRef') nombreRef : ElementRef;
  @ViewChild('apellidoRef') apellidoRef : ElementRef;


  agregarPersona(){
    let persona1 = new Persona(this.nombreRef.nativeElement.value, this.apellidoRef.nativeElement.value);
    this.personaCreada.emit(persona1);
  }
}
