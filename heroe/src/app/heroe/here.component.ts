import { Component, OnInit } from '@angular/core';
import { DataHeroeService } from '../servicio/data-heroe.service';
import {  heroe } from '../model/heroe.model';



@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.css']
})
export class HereComponent implements OnInit {

  constructor(private _DataHeroeService:DataHeroeService) { }

  heroe: heroe [] = [];
    ngOnInit(): void {
    this.heroe= this._DataHeroeService.getHeroeData();
  }
 
}
