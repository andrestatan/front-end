import { Component, OnInit, Input } from '@angular/core';
import { persona } from '../persona.modules';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input () persona: persona;
  @Input () indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
