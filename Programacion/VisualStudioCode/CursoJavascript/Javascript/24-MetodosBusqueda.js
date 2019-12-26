"use strict"

var numero=123456;
var texto="Hola aqui probando elementos de busqueda";

//El ultimo elemento encontrado en la indicacion en este caso string
var comprobacion=texto.lastIndexOf("a");
//Busca la primer concordancia del elemento buscado
var segundaComprobacion=texto.search("a");
//Muestra un array con los elmentos encvontrados de acuerdo a la busqueda
var tercerComprobacion=texto.match(/a/g);
//Muestra la cadena encontrado por el (numero del caracter, cantidad del caracter)
var cuartoComprobacion=texto.substr(14,3);
//Toma el caracter indicado por conteo de los mismos segun se indique
var quintaComprobacion=texto.charAt(20);
//Inicia con
var sextaComprobacion=texto.startsWith("H");
//Termina con
var septimaComprobacion=texto.endsWith("busqueda");
// busca que el elemento contenga x dato
var octavaComprobacion=texto.includes("bando");

console.log(comprobacion);
console.log(segundaComprobacion);
console.log(tercerComprobacion);
console.log(cuartoComprobacion);
console.log(quintaComprobacion);
console.log(sextaComprobacion);
console.log(septimaComprobacion);
console.log(octavaComprobacion);