import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cliente } from '../modelo/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  clientesColeccion: AngularFirestoreCollection <cliente>;
  clienteDocumento: AngularFirestoreDocument <cliente>;
  clientes: Observable <cliente []>;
  cliente: Observable <cliente>;
  
  
  constructor(private dv:AngularFirestore) { 
    this.clientesColeccion = dv.collection('cliente', ref => ref.orderBy('nombre','asc'));
  }

  getClientes(): Observable <cliente[]> { 
      //obtenerClientes
      this.clientes = this.clientesColeccion.snapshotChanges().pipe(
        map(cambios => {
          return cambios.map(accion=>{
            const datos = accion.payload.doc.data() as cliente;
            datos.id = accion.payload.doc.id;
            return datos
          })
        })
      )

      return this.clientes;
  }

  agregarCliente(cliente: cliente){
    this.clientesColeccion.add(cliente)
  }

  getcliente(id: string){
    this.clienteDocumento = this.dv.doc<cliente>(`cliente/${id}`);
    this.cliente = this.clienteDocumento.snapshotChanges().pipe(
      map(accion => {
        if(accion.payload.exists === false){ return null}
        else {const datos = accion.payload.data() as cliente;
        datos.id =accion.payload.id;
      return datos}
      })
    )
    return this.cliente
  }

  modificar(cliente: cliente){
    this.clienteDocumento = this.dv.doc(`cliente/${cliente.id}`);
    this.clienteDocumento.update(cliente);
  }

  eliminarCliente(cliente: cliente){
    this.clienteDocumento = this.dv.doc(`cliente/${cliente.id}`);
    this.clienteDocumento.delete();
  }
}
