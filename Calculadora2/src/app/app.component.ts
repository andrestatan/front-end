import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Ajuste nueva Calculadora';

  totalFinal:number;

  onTotal(resultados:number){
   this.totalFinal=resultados
  }
}
