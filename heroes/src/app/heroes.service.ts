import { Injectable } from '@angular/core';
import { Hero } from '../ListadoHeroes';
import { heroes } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  getHeroes(): Hero[] {
    return heroes;
  }

  constructor() { }
}
