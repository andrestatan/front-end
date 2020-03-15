import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Titulo:string = 'Calculadora';
  resumen:string="Tercer y ultimo ejercicio de la calculadora";
  resultad:number;


onResultado(resultado:number){
  this.resultad=resultado;

}
}
