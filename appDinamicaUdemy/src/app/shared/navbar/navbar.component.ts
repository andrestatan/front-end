import { Component, OnInit } from '@angular/core';

declare let $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }


  cerrarNavbar(){
    $('.navbar-collapse').collapse('hide')
  }

}
