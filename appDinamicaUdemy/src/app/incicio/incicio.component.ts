import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modals.service';

declare let $: any;
@Component({
  selector: 'app-incicio',
  templateUrl: './incicio.component.html',
  styleUrls: ['./incicio.component.css']
})
export class IncicioComponent implements OnInit {

  mostrarYo:boolean= true;

  constructor(public modalService:ModalService,
    private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
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

  mostrarNoticia(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip('hide');
    })
    setTimeout(() => {
      this.router.navigateByUrl('Noticia');
    }, 150);
      
  }

}
