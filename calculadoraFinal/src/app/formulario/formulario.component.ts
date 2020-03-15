import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() agregar=new EventEmitter<number>();
  valor1:number;
  valor2:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSumar(){
    let total=this.valor1 + this.valor2;
    this.agregar.emit(total);
    }

}
