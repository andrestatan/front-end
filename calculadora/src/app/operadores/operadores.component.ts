import { Component, OnInit } from '@angular/core';

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
  resultado: string = "Resultado: ";
  total;

  procesoSuma(){ 
    if(this.primerValor != undefined && this.segundoValor != undefined){
      return this.total = this.resultado+" "+(this.primerValor + this.segundoValor)
    } else {
      window.alert("Debe Llenar los dos campos")
    }
  }

}
