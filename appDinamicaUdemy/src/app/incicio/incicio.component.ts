import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-incicio',
  templateUrl: './incicio.component.html',
  styleUrls: ['./incicio.component.css']
})
export class IncicioComponent implements OnInit {

  mostrarYo:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  yoMostrar(){
    this.mostrarYo = ! this.mostrarYo;
  }

  tecnologias() {
    $('#modalTecnologias').modal();
  }

}
