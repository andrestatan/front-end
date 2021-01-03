import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modals.service';

declare let $: any;
@Component({
  selector: 'app-incicio',
  templateUrl: './incicio.component.html',
  styleUrls: ['./incicio.component.css']
})
export class IncicioComponent implements OnInit {

  mostrarYo:boolean= true;

  constructor(public modalService:ModalService) { }

  ngOnInit(): void {
  }

  yoMostrar(){
    this.mostrarYo = ! this.mostrarYo;
  }

  tecnologias() {
    $('#modalTecnologias').modal();
  }

  sobreMi(){
    $('#sobreMi').modal();
    //this.modalService.cerrarSobreMi();
  }

}
