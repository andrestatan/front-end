import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _router:Router) { }

  token: string = "";

  login(email: string, password: string){
    firebase.default.auth().signInWithEmailAndPassword(email, password).
    then(
      response => {
        firebase.default.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token
            this._router.navigate(['/']);
          }
        )
      }
    )
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != "";
  }

  logout(){
    firebase.default.auth().signOut().then(()=> {this.token = ""; this._router.navigate(['login'])})
    .catch(error => { console.log("error de log Out "+error)})
  }
}
