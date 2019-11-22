"use strict"

/* Mostrar todos los numeros im´pares que hay entre dos numeros
introducidos por el usuario */

var numero1=parseInt(window.prompt("Ingrese el primer numero",0));
var numero2=parseInt(window.prompt("Ingrese el segundo numero",0));

for(let a=numero1; a<numero2; a++){
   
    if(a % 2 == 1){
        console.log("el "+a+" es impar");
    }
}