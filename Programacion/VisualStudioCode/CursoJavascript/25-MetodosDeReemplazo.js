"use strict"

var numero=4444;
var texto="Hola mundo esta es una prueba";
var texto2="archivo local y punto";
//Reemplaza un string
var prueba=texto.replace("Hola", "Buenas Tardes");
console.log(prueba);
//Corta una cadena 
var prueba=texto.slice(5, 9);
console.log(prueba);
// Separar cadenas
var prueba=texto.split(" ");
console.log(prueba);
// Quita los espacios 
var prueba=texto.trim();
console.log(prueba);