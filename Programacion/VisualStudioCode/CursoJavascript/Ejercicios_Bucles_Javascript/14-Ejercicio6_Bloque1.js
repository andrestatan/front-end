"use strict"

/* tabla multiplicar de un numero introducido por 
pantalla */

var numero=parseInt(window.prompt("De que numero quieres la tabla",0));
var resultado=0;
var multiplicar=1;

while(isNaN(numero) || numero<0){
    numero=parseInt(window.prompt("De que numero quieres la tabla",0));
}

for(var a=0; a <= 10;a++){
resultado=numero*a;
document.write(a+" x "+numero+" = "+resultado+ "<br/>");
}
document.write("----------------------------------"+"<br/>");
document.write("su numero digitado es "+numero+"<br/>");


//Ahora con todas las tablas digamos que hasta el 10

do{ 
    document.write("<h1><strong> Estas en la tabla del: "+numero+"</h1></strong>")   
for(var a=0; a <= 10;a++){
    resultado=numero*a;
    document.write(a+" x "+numero+" = "+resultado+ "<br/>");
    }
    numero++;
    document.write("----------------------------------"+"<br/>");
}while(numero<=15)

