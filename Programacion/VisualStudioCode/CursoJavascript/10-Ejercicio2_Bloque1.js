"use strict"

/* Hacer un programa que muestre todos los numeros entre dos
numeros introducidos por el usuario */

var numero1=parseInt(window.prompt("Ingrese el primer numero",0));
var numero2=parseInt(window.prompt("Ingrese el segundo numero",0));

console.log("Los numeros que usted ingreso son: "+numero1+" y "+numero2);
if(numero1>numero2){
for(let a=numero1; a>=numero2; a--){
    console.log(a);
}
}else{
    for(let a=numero1; a<=numero2; a++){
        console.log(a);
}
}

