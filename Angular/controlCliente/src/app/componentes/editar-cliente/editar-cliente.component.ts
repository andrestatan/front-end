import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private _clientes:ClienteService, private mensaje : FlashMessagesService,
    private _router: Router, private _route: ActivatedRoute) { }

  id: string;
  cliente: cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  ngOnInit(): void { 
    this.id= this._route.snapshot.params['id'];
    this._clientes.getcliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    })
  }

  eliminar(){
    if(confirm('seguro que desea eliminar el registro?')){
      this._clientes.eliminarCliente(this.cliente);
      this._router.navigate(['/'])
    }
  }

  guardarCliente({value, valid}: {value: cliente, valid: boolean}){ 
    if(!valid){
      this.mensaje.show('Por favor llena el formulario correctamente',{
      cssClass: 'alert-danger', setTimeOut: 3000})
    } else {
      value.id= this.id;
      this._clientes.modificar(value);
      this._router.navigate(['/'])
    }
  }

}
