import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _clientes:ClienteService) { }

  clientes: cliente[];

  ngOnInit(): void { 
    this._clientes.getClientes().subscribe( clientes =>{
      this.clientes = clientes;
    })
  }

}
