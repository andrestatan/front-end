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

  personas: Persona[] = [];

  constructor(private _persona: PersonasService, private router: Router) { }

  ngOnInit() {
    this._persona.obtenerPersona().subscribe(
      (person)=> {
        let clave= Object.values(person)
        for(let i=0; i< clave.length; i++){
          let key = clave[i]
          this.personas.push(new Persona(key.nombre, key.apellido))
        }
        this._persona.setPersonas(this.personas);
    });
  };

  agregar() {
    this.router.navigate(['personas/agregar'])
  }

}
