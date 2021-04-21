import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/Servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( private router: Router, private flashMessages: FlashMessagesService, private _login:LoginService) { }

  ngOnInit(): void {
    this._login.getAuth().subscribe(auth=>{
      if(!auth){
        this.router.navigate(['/'])
      }
    })
  }

  email: string;
  password: string;

  Registro(){
    this._login.registrarse(this.email, this.password).then(res =>{
      this.router.navigate(['/'])
    }) .catch(error =>{
      this.flashMessages.show(error.message, {cssClass: 'alert-danger', timeout: 3000})
    })
  }

}
