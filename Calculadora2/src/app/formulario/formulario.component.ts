import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() nuevoValor=new EventEmitter<number>();
  primerNumero:number;
  segundoNumero:number;
  constructor() { }


  onSumar():void{
    let total=this.primerNumero+this.segundoNumero;
    this.nuevoValor.emit(total)
    }
  ngOnInit(): void {
  }

}
