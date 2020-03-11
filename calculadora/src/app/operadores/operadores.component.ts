import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { datos } from '../app.valor.component';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {
  @Input() numeroa:number;
  @Input() numerob:number;
  resultado: number;

   constructor() { }

  ngOnInit(): void {

  }

  onsuma(){
    this.resultado=this.numeroa+this.numerob;
  }
  onresta(){
    this.resultado=this.numeroa-this.numerob;
  }
  onMulti(){
    this.resultado=this.numeroa*this.numerob;
  }
  onDivision(){
    this.resultado=this.numeroa/this.numerob;
  }
}
