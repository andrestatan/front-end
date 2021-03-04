import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo ='Listado de Personas';


  constructor(private login:FirebaseService) { }

  ngOnInit():void{
  firebase.default.initializeApp({
    apiKey: "AIzaSyBOGtiVXpUWj2bRO9cvdVLOweuEbb8ZqzQ",
    authDomain: "bdclient-df8a4.firebaseapp.com",
  })

  }

  isAutenticado(){
    return this.login.isAutenticado()
  }

  salir(){
    return this.login.logout()
}

}
