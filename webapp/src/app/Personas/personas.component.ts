import { Component, Input } from '@angular/core';

@Component({
    selector:'app-personas',
    templateUrl: './personas.component.html',
    styleUrls:['./personas.component.css']
    
})

export class personasComponent{

agregarPersona= false;    
agregarPersonaStatus="No se ha agregado alguna persona";
tituloPersona="Hola mundo";

constructor(){
    setTimeout(
        ()=>{
            this.agregarPersona=true;
        }
        ,3000);
    }

    onCrearPersona(){
        this.agregarPersonaStatus="Adicion exitosa";
    }

    onModificarPersona(event:Event){
        this.tituloPersona=(<HTMLInputElement>event.target).value;
    }
}

