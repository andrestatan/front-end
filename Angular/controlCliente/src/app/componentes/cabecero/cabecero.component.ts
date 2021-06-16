import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/Servicios/configuracion.service';
import { LoginService } from 'src/app/Servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLogged: boolean;
  logged: string;
  mostrarRegistro: boolean;
  permitirRegistro: boolean;

  constructor(private loginService: LoginService, private router:Router, private configuracion: ConfiguracionService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogged = true;
        this.logged = auth.email;
      } else {
        this.isLogged = false;
      }
    })

    this.configuracion.getConfiguracion().subscribe(configuracion => {
      this.permitirRegistro = configuracion.permitirRegistro;
    })
  }

  logout(){
    this.loginService.logOut();
    this.isLogged = false;
    this.logged = undefined;
    this.router.navigate(['/login'])
  }

}
