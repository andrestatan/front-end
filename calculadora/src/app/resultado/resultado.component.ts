import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() total: number;
  
  resultado: string = "Resultado";


}
