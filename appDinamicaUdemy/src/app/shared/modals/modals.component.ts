import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from 'src/app/services/modals.service';
import Swal from 'sweetalert2';

declare let $: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  mensaje = {
    email : '',
    mensaje : ''
  };

  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoFede(f: NgForm){

    if(f.invalid){
      $('#contacto').modal('hide');
      console.log(f.value)
      this.limpiarMensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
      })
    } else {
      $('#contacto').modal('hide');
      console.log(f.value)
      this.limpiarMensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Mensaje Enviado correctamente',
        background: 'rgb(233,233,0)',
      })
    }
  }

  limpiarMensaje(){
    this.mensaje.email='';
    this.mensaje.mensaje='';
  }


}
