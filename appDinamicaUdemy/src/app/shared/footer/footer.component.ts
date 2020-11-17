import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import Swal from 'sweetalert2';

declare let $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }



irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }


  anio= new Date().getFullYear();

  ngOnInit(): void {
  }
  whatsApp(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      timer: 1500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: '01 8000 343 00 33',
      background: 'rgb(233,233,0)',
    })
  }

  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }

  salir(){
    setTimeout(() => {
      $('#privacidad').modal('hide')
    }, 300);
  } 
}
