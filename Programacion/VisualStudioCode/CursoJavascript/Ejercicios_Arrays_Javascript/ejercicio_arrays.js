"use strict"

document.write("<h1> Ejercicios Arrays </h1>");

/* 
Programa que 
1. pida 6 numeros por pantalla y los guarde en un array  -- Hecho
2. mostrar el array completo en el cuerpo de pagina y consola  -- Hecho
3. sacar l array ordenado y mostrarlo -- Hecho
4. Invertir su orden y mostrarlo -- Hecho
5. mostrar cuantos elementos tiene el array -- 
6. Busqueda de un valor introcducido por el usuario y que diga si esta y su posicion -- Hecho
 */

 // Punto numero 1
var elemento=[];
//  var elemento=["putas","casa","carro","computador","televisor"]

for(let a=0; a < 6 ;a++){
var adicionar=parseInt(window.prompt("Ingrese el elemento a agregar"));
elemento.push(adicionar);
 }
 
 //Punto numero 2
//Imprimirlo por documento
  document.write("<ol>");
 for( var cantidad in elemento){
    document.write("<li>"+elemento[cantidad]+"</li>");
 };
document.write("</ol>");

//Imprimirlo por consola
elemento.forEach(function(posicion){
console.log(posicion);
});

//Punto numero 3
elemento.sort();
document.write("Array organizado <br>");
document.write(elemento+" <br>");
console.log("Array organizado");
console.log(elemento);

//Punto numero 4
elemento.reverse();
document.write("Array invertido <br>");
document.write(elemento+" <br>");
console.log("Array invertido");
console.log(elemento);

// Punto numero 5
document.write("El documento tiene "+elemento.length+" elementos <br>");
console.log("El documento tiene "+elemento.length+" elementos");
//Punto numero 6
var verificacione=window.prompt("Ingrese el dato para buscarlo");

var ubicacion=elemento.findIndex(function(verificacion){
return verificacion==verificacione;
});
console.log(ubicacion);
document.write(ubicacion+" <br>");
var nombre=elemento.find(function(verificacion){
    return verificacion==verificacione;
});
console.log(nombre);
document.write(nombre+" <br>");