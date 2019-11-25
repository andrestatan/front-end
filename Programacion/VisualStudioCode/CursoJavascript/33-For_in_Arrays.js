"use strict"

/* Arrays usando for y foreach */

var nombre=["Andres","Posada","Gustabo","Fernandez"];
var apellidos=["guzman","knox","takuma","faylan"];

var datos=[nombre,apellidos]

document.write("<h1> Prueba de Operaciones con Arrays </h1>");

for(let nom in nombre){
    document.write("<li>"+nombre[nom]+"</li>");
}

console.log(nombre);