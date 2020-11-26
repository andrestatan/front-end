import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';

declare let $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ojo: boolean = true;
  login: boolean = true;
  input1: boolean;
  clave = "";

  constructor( public modalService:ModalService) { 
    this.modalService.ojo2= true;
  }

  ngOnInit(): void {
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }


  cerrarNavbar() {
    $('.navbar-collapse').collapse('hide');
    this.login =false;
    this.input1 = false;
  }

  entrar() {
    this.login = false;
    this.input1 = true;
    $(document).ready(() => {
      $('#focusClave').trigger('focus');
    });
    $('[data-toggle="tooltip"]').tooltip('hide');

  }

  onClick1() {
    this.ojo = false;
    this.login = false;
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  onClick2() {
    this.ojo = true;
    this.login = true;
    this.modalService.ojo2=false;
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  alternacion(valor1, valor2, valor3){
    this.input1 = valor1;
    this.login = valor2;
    this.clave = "";
    this.cerrarNavbar();
    if(valor3){
      $('#loginModal').modal();
    }
  }

  inputLogin() {
    this.clave != "123" ? this.alternacion(false,false,false):this.alternacion(false,false,true);
    $(document).ready(() => {
      $('#loginModal').on('shown.bs.modal', () => {
        $('#focusLogin').trigger('focus');
      });
    });
  }

  logout(){
    this.modalService.logout();
    this.modalService.ValidacionAcciones("top",'success','Cierre de Sesion Exitoso')
  }

}
