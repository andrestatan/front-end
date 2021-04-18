import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _clientes:ClienteService, private mensaje : FlashMessagesService) { }

  requerido = true;
  clientes: cliente[];
  cliente: cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  @ViewChild('clienteForm') clienteForm: NgForm
  @ViewChild('botonCerrar') botonCerrar: ElementRef;

  ngOnInit(): void { 
    this._clientes.getClientes().subscribe( clientes =>{
      this.clientes = clientes;
    })
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes != null){
      this.clientes.forEach(cliente =>{
        saldoTotal += cliente.saldo
      })
    }
    return saldoTotal
  }


  agregar({value, valid}: {value: cliente, valid: boolean}){
    if(!valid){
      this.mensaje.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 2000
      });
    } else {
      this._clientes.agregarCliente(value)
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }

}
