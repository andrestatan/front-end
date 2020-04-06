import { Component, OnInit, Input } from '@angular/core';
import { heroes } from '../hero.service';
import { Hero } from '../ListadoHeroes';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],

})
export class HeroeComponent implements OnInit {
  primer: string = "Yamato";
  @Input() adicionar: string;
  Hero = Hero;
  seleccion: heroes;
/*
  heroes: heroes = {
    identificacion: "Dragon",
    valor: 3000
  }; */

  onSelect(heroes:heroes):void{
    this.seleccion=heroes;
  }


constructor() { }


  ngOnInit(): void {
  }

}

