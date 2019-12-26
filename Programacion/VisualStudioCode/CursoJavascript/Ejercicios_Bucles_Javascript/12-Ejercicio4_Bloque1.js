"use strict"

/* 
Mostrar todos los numeros divisores de un numero introducido en un prompt 
*/

var numero=parseInt(window.prompt("ingrese un numero"));

for(var a=1; a<=numero; a++){
    if(numero%a ==0){
        console.log("Su numero es: "+numero+" y el divisor es: "+a);
    }
}