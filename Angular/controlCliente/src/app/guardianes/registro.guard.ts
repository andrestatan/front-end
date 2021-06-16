import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfiguracionService } from "../Servicios/configuracion.service";

@Injectable()

export class configuracionGuard implements CanActivate{

    constructor( private router:Router, private configuracion: ConfiguracionService){}

    canActivate(): Observable<boolean>{
        return this.configuracion.getConfiguracion().pipe(
            map(configuracion =>{
                if(!configuracion.permitirRegistro){
                    this.router.navigate(['/login']);
                    return false
                } else {
                    return true;
                }
            })
        )
    }
}