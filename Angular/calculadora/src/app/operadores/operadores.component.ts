import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  primerValor: number;
  segundoValor: number;
  total: number;
  @Output() totalSuma = new EventEmitter <number> ();

  procesoSuma(){ 
    if(this.primerValor != undefined && this.segundoValor != undefined){
      this.total = this.primerValor + this.segundoValor
      this.totalSuma.emit(this.total)
    } else {
      window.alert("Debe Llenar los dos campos")
    }
  }

  limpiar(){
    this.primerValor = undefined;
    this.segundoValor = undefined;
    this.total = undefined
    this.totalSuma.emit(this.total)
  }

}
