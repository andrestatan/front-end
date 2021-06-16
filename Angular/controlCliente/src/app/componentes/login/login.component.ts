import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/Servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private flashMessages: FlashMessagesService, private _login:LoginService) { }
  email: string;
  password: string;

  ngOnInit(): void {
    this._login.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }

  login(){
    this._login.login(this.email, this.password)
    .then(res => {
      this.router.navigate(['/']);
    })
    .catch(error =>{
      this.flashMessages.show(error.message,{cssClass: 'alert-danger', timeout: 3000})
    })
  }
}
