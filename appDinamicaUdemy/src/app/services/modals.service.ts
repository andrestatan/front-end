import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad: boolean;
  privacidadSeleccionada: boolean;
  online: boolean;
  ojo2: boolean;

  mostrar1: boolean = true;
  mostrar2: boolean = false;
  mostrar3: boolean = false;
  clase = 'btn-warning';
  claseAlert = 'btn-outline-warning';
  claseAlert2 = 'btn-outline-warning';

  constructor() { }


  politicaPrivacidad() {
    this.privacidad = false;
    this.privacidadSeleccionada = true;
    $('input[type="checkbox"]').prop('checked', false);
    $('#alerta').modal('hide');
    setTimeout(() => {
      $('#privacidad').modal();
    }, 500);
  }

  cambioPrivacidad() {
    this.privacidadSeleccionada = !this.privacidadSeleccionada;
  }

  ValidacionAcciones(posicion,icon,titulo){
    posicion == "" ? posicion = 'top-right': posicion
    const Toast = Swal.mixin({
      toast: true,
      position: posicion,
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      icon: icon,
      title: titulo,
      background: 'rgb(233,233,0)',
    })
  }


  contacto() {
    setTimeout(() => {
      $('input[type="checkbox"]').prop('checked', false);
      this.privacidadSeleccionada = true;
    }, 100);
    $('#alerta').modal('hide');
    // Abrir modal contacto y cerrar modal alerta
    setTimeout(() => {
    $('#contacto').modal();
    }, 500);
    
  $(document).ready(() => {
    $('#contacto').on('shown.bs.modal', () => {
      $('#focusInput').trigger('focus');
    });
  });
  }


  logout(){
    this.online=false;
    this.ojo2=true;
  }

  pagina1(){
    this.mostrar1= true;
    this.mostrar2= false;
    this.mostrar3= false;
    this.clase = 'btn-warning';
    this.claseAlert = 'btn-outline-warning';
    this.claseAlert2 = 'btn-outline-warning';
  }

  pagina2(){
    this.mostrar1= false;
    this.mostrar2= true;
    this.mostrar3= false;
    this.clase = 'btn-outline-warning';
    this.claseAlert = 'btn-warning';
    this.claseAlert2 = 'btn-outline-warning';
  }

  pagina3(){
    this.mostrar1= false;
    this.mostrar2= false;
    this.mostrar3= true;
    this.clase = 'btn-outline-warning';
    this.claseAlert = 'btn-outline-warning';
    this.claseAlert2 = 'btn-warning';
  }

  cerrar(){
    $('#modalTecnologias').modal('hide');

    setTimeout(() => {
      this.pagina1();
      
    }, 500);
  }

  cerrarSobreMi(){
    $('#sobreMi').modal('hide');
  }

}