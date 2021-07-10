import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { configuracion } from '../modelo/configuracion.model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor(private db: AngularFirestore) { }

  id = '1';
  configuracionDoc: AngularFirestoreDocument<configuracion>;
  configuracion: Observable <configuracion>

  // el unico ID es el de valor 1

getConfiguracion(): Observable<configuracion>{
this.configuracionDoc = this.db.doc<configuracion>(`configuracion/${this.id}`);
this.configuracion = this.configuracionDoc.valueChanges();
return this.configuracion;
}

modificarConfiguracion(configuracion : configuracion){
  this.configuracionDoc = this.db.doc<configuracion>(`configuracion/${this.id}`);
  this.configuracionDoc.update(configuracion)
}
}
