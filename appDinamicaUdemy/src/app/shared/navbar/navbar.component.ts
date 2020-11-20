import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }


  cerrarNavbar() {
    $('.navbar-collapse').collapse('hide')
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
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  alternacion(valor1, valor2){
    this.input1 = valor1;
    this.login = valor2;
    this.clave = "";
    this.cerrarNavbar();
  }

  inputLogin() {
    this.clave != "123" ? this.alternacion(false,false):this.alternacion(false,false)
  }

}
