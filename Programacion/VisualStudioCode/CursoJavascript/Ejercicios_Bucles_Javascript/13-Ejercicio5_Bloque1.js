"use strict"

/* Hacer un programa que nos diga si un numero
es par o impar, debe llevar ventana prompt, si un numero no es valido que 
pida nuevamente el numero, mostrar si es par o impar */

var numero=parseInt(window.prompt("Ingrese el numero a procesar",0));

while(numero<0 || isNaN(numero)){
    numero=parseInt(window.prompt("Ingrese el numero a procesar",0));
}

if(numero % 2 ==0){
    document.write("Su numero "+numero+" es par");
} else {
    document.write("Su numero "+numero+" es impar");
}