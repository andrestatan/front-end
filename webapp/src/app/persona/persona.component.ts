import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent { 

  nombre:string="Jhonnatan";
  apellido:string= "Posada";
  private edad:number= 29;

  getEdad():number{
    return this.edad;
  }

}
