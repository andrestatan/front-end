import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from 'src/app/services/modals.service';

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

  salirLogin(){
    $('#loginModal').modal('hide');
  }

  contactoFede(f: NgForm){

    if(f.invalid){
      $('#contacto').modal('hide');
      this.limpiarMensaje();
      this.modalService.ValidacionAcciones("","error","'Todos los campos son obligatorios'")
    } else {
      $('#contacto').modal('hide');
      this.limpiarMensaje();
   
    }
  }

  limpiarMensaje(){
    this.mensaje.email='';
    this.mensaje.mensaje='';
  }

  limpiarUsuario(){
    this.usuarioLogin.nombre='';
    this.usuarioLogin.password='';
  }

  login(arr: NgForm){

    if(this.usuarioLogin.nombre=="Federica" && this.usuarioLogin.password =="123"){
      this.salirLogin();
      this.modalService.online=true;
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
    }, 1000);
    this.limpiarUsuario();
    this.modalService.ValidacionAcciones("top",'success','Inicio de Sesion Exitoso')
    } else {
      this.salirLogin();
      this.modalService.online=false;
      this.limpiarUsuario();
      this.modalService.ValidacionAcciones("top",'error','Inicio de Sesion Fallido')
    }
  }


}
