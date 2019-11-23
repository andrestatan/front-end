"use strict"

var texto="Hola mundo soy una variable global para la prueba";
var numero=12;

function holamundo(texto){
var hola_mundo="Hola mundo";
numero=numero.toString();
console.log(texto);
console.log(numero);
console.log(hola_mundo);
console.log(typeof numero);
}

holamundo(texto);
//No olvidar que las variables locales no pueden ejecutarse fuera de la funcion
// o del metodo en el cual se este trabajando