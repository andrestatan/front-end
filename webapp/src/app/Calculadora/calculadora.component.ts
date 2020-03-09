import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class calculadoraComponent{
  tituloCalculadora:string="Aplicación de Calculadora";

  PrimerValor:number=0;
  SegundoValor:number=0;
  total:number=0;

 inhabilitar=true;

  getSuma():void{
    this.total=this.PrimerValor + this.SegundoValor;
  }

  getResta():void{
    this.total=this.PrimerValor - this.SegundoValor;
  }

  getMultiplicacion():void{
    this.total=this.PrimerValor * this.SegundoValor;
  }

  getDivision():void{
    this.total=this.PrimerValor / this.SegundoValor;
  }



}