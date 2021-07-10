import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService  implements CanActivate{

  guardian: boolean= false;

  constructor(private _firebase: FirebaseService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  if(this._firebase.isAutenticado()){
   this.guardian= true;
  }
  else{ this.route.navigate(['login'])
   this.guardian = false;
  }
   return this.guardian;
  }
  
}
