import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {
  @Input()  numero1:number;
  @Input() numero2:number;
  resultado:number;
  constructor() { }

  ngOnInit(): void {

  }

  onsuma(){
    this.resultado=this.numero1+this.numero2;
  }
  onresta(){
    this.resultado=this.numero1+this.numero2;
  }
  onMulti(){
    this.resultado=this.numero1+this.numero2;
  }
  onDivision(){
    this.resultado=this.numero1+this.numero2;
  }
}
