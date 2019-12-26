"use strict"

//Metodos que permiten transformar textos

var numero=444;
var texto="Bienvenido al curso de Javascript de Victor Robles";
var texto2="SE HECHA FLORES";
var yo="Jhonnatan Andres Posada Cadena";


numero=numero.toString();
texto=texto.toUpperCase();
texto2=texto2.toLowerCase();

/* console.log(numero);
console.log(typeof numero);
console.log(texto);
console.log(texto2);
console.log(texto.length);
console.log(yo.length); */

//TODO: Para conocer la cantidad de elementos de un array se utiliza el metodo .length

console.log(texto+" "+texto2);

var pruebaconcatenacion= texto.concat(" "+texto2.concat(" "+yo));
console.log(pruebaconcatenacion);
