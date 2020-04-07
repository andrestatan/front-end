import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../ListadoHeroes';

@Component({
  selector: 'app-listado-heroe',
  templateUrl: './listado-heroe.component.html',
  styleUrls: ['./listado-heroe.component.css']
})
export class ListadoHeroeComponent implements OnInit {
  @Input() hero : Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
