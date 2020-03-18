import { Component, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { persona } from '../persona.modules';
import { servicio } from '../servicio.service';
import { personaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  })

export class FormularioComponent implements OnInit {

  @ViewChild ("nombreInput") nombre: ElementRef;
  @ViewChild ("apellidoInput") apellido: ElementRef;

  constructor(private servicio:servicio, private personaService:personaService) {}

  ngOnInit(): void {

  }
  onAgregarPersona(){
    let persona1=new persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value);
    //this.servicio.imprimirConsola("El mensaje de adicion, de nombre: "+persona1.nombre+" y apellido: "+persona1.apellido);
    this.personaService.agregarPersona(persona1);
    }


}
