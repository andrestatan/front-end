"use strict"

// Conseguir elemntos por sus etiquetas y por su clase

var allDivs = document.getElementsByTagName("div");

 var prueba=allDivs[2].innerHTLM="Que vivan las putas";

var parrafo= document.createElement("p");
var texto= document.createTextNode("Que sueño tan hijueputa");

parrafo.appendChild(texto);

document.querySelector("#espacioBlanco").appendChild(parrafo);

console.log(allDivs);
 console.log(prueba);

 