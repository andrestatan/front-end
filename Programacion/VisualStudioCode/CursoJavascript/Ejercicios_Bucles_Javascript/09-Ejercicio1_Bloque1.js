"use strict"

/* 
Programa que pida dos numeros y que diga cual es mayor menor y si son iguales
 */
// PLUS: Si los numeros no son un numero o son menores o iguales nos vuelva a pedir los numeros
var primerNumero=parseInt(window.prompt("Ingrese el primer numero",0));
var segundoNumero=parseInt(window.prompt("Ingrese el segundo numero",0));

while(primerNumero <=0 || segundoNumero<=0 || isNaN(primerNumero) || isNaN(segundoNumero)){
window.alert("Digite correctamente los numeros");
primerNumero=parseInt(window.prompt("Ingrese el primer numero",0));
segundoNumero=parseInt(window.prompt("Ingrese el segundo numero",0));
}

if(primerNumero != segundoNumero){
   if(primerNumero > segundoNumero){
     console.log("El numero: "+primerNumero+" es mayor que: "+segundoNumero);
 } else{
     console.log("El numero: "+primerNumero+" es menor que: "+segundoNumero);
 } 
} else{
    console.log("El numero: "+primerNumero+" y el numero: "+segundoNumero+" son iguales");
}




