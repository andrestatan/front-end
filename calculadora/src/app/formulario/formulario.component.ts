import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { datos } from '../app.valor.component';

@Component({
  selector: 'app-forma',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


number1:number;
number2:number;
resultadoFinal:number;

  constructor() { }

  ngOnInit(): void {

  }

}
