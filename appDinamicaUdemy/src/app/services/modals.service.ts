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

}