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

  usuarioLogin= {
    nombre: "Federica",
    password: "123"
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
      this.limpiarMensaje();
      this.ValidacionAcciones("","error","'Todos los campos son obligatorios'")
    } else {
      $('#contacto').modal('hide');
      this.limpiarMensaje();
   
    }
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

  limpiarMensaje(){
    this.mensaje.email='';
    this.mensaje.mensaje='';
  }

  login(arr: NgForm){

    if(this.usuarioLogin.nombre=="Federica" && this.usuarioLogin.password =="123"){
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
    }, 1000);
    this.ValidacionAcciones("",'success','Inicio de Sesion Exitoso')
    } else {
      this.ValidacionAcciones("",'error','Inicio de Sesion Fallido')
    }
  }

  salirLogin(){

  }
}
