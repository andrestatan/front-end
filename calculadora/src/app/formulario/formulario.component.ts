import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  num1:number;
  num2:number;
  numero1:number;
  numero2:number;

  constructor() { }

  ngOnInit(): void {

  }

}
