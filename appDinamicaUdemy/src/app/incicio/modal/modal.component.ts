import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';

declare let $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 

  constructor( public modalService:ModalService) { }

  ngOnInit(): void {
  }

  pagina1(){
    this.modalService.pagina1();
  }

  pagina2(){
    this.modalService.pagina2();
  }

  pagina3(){
    this.modalService.pagina3();
  }

  cerrar(){
    this.modalService.cerrar()
  }

  cerrarSobreMi(){
    this.modalService.cerrarSobreMi();
  }
}
