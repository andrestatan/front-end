import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLogged: boolean;
  logged: string;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogged = true;
        this.logged = auth.email;
      } else {
        this.isLogged = false;
      }
    })
  }

  logout(){
    this.loginService.logOut();
    this.isLogged = false;
    this.logged = undefined;
    this.router.navigate(['/login'])
  }

}
