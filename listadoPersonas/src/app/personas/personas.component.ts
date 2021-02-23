import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas : Persona[] =[];

  constructor(private _persona:PersonasService, private router:Router){ }

  ngOnInit(){
    this.personas = this._persona.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
