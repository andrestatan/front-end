"use strict"

/* Arrays usando for y foreach */

var nombre=["andres","posada","Gustabo","Fernandez"];
var apellidos=["guzman","knox","takuma","faylan"];

var datos=[nombre,apellidos]

document.write("<h1> Prueba de Operaciones con Arrays </h1>");

/* var adicionar="";

do{
    var agregar=window.prompt("Ingrese un nombre a agregar, digite finalizar para temrinar");
    nombre.push(agregar);
}while(agregar !="finalizar")
nombre.pop(); */

var indice=nombre.indexOf("Gustabo");
console.log(indice)
if(indice> -1){
    nombre.splice(indice, 2)
}

var conversion= nombre.join();

console.log(conversion);

