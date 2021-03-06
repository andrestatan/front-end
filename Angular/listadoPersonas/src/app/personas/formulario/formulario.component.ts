import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { LoggingServiceService } from '../../logging-service.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private data:DataService,
    private _persona:PersonasService,
    private router: Router,
    private _route: ActivatedRoute) {
      this._persona.saludar.subscribe(
        (indic: number) => alert("El indice es: "+ (indic+1))
      )
     }

  ngOnInit(): void {
    this.indice= this._route.snapshot.params['id'];
    this.modoEdicion = parseInt(this._route.snapshot.queryParams['modoEdicion']);
    //if(this.indice){
      if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona: Persona= this._persona.encontrarPersona(this.indice);
      this.nombreInput= persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  //@Output() personaCreada = new EventEmitter <Persona> ();

  //-------------------------UTILIZANDO TWO WAY BINDING

  nombreInput = '';
  apellidoInput = ''; 
  indice : number;
  modoEdicion: number;
  
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


  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //if(this.indice){
      if(this.modoEdicion != null && this.modoEdicion === 1){
      this._persona.modificarPersona(this.indice,persona1);
      this.router.navigate(['personas'])
      this.data.cargarPersonas()
    } else {
      this._persona.personaAgregada(persona1);
      this.router.navigate(['personas'])
      this.data.cargarPersonas()

    }
  } 

  eliminarPersona(){
    if(this.indice != null){
      this._persona.eliminarPersona(this.indice);
      this.router.navigate(['personas'])
    }
  }
}
