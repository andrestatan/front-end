import { Component } from '@angular/core';

@Component({
    selector:"app-personas",
    templateUrl: "./personas.component.html",
    styleUrls:["./personas.component.css"]
    
}

)
export class personasComponent{

nombrePersona:string = "Andres";
apellidoPersona:string = "Posada";
private edad:number = 22;

getEdad():number{
    return this.edad;
}
}

