import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private LoggingService:LoggingServiceService,
    private _persona:PersonasService) {
      this._persona.saludar.subscribe(
        (indic: number) => alert("El indice es: "+ (indic+1))
      )
     }

  ngOnInit(): void {
  }

  //@Output() personaCreada = new EventEmitter <Persona> ();

  //-------------------------UTILIZANDO TWO WAY BINDING

   nombreInput = '';
  apellidoInput = ''; 
  
/*   agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);
  }   */

  //---------------------- UTILIZANDO LOCAL REFERENCE

 /*  agregarPersona(nombreRef: HTMLInputElement, apellidoRef: HTMLInputElement){
    let persona1 = new Persona(nombreRef.value, apellidoRef.value);
    this.personaCreada.emit(persona1);
  } */

  // -----------------------UTILIZANDO VIEWCHILD

/*   @ViewChild('nombreRef') nombreRef : ElementRef;
  @ViewChild('apellidoRef') apellidoRef : ElementRef;*/


  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this._persona.personaAgregada(persona1)
  } 
}
