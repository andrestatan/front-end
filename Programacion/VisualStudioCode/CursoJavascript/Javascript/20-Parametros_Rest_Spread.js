"use strict"

// Parametros de tipo Rest, encapsula los datos restantes en un array se agrega con los 
//tres puntos suspensivos
function frutas(fruta1,fruta2,...Resto_frutas){
console.log("fruta 1: "+ fruta1);
console.log("fruta 2: "+ fruta2);
console.log(Resto_frutas);
}
var fruta=["manzana","naranja"]
frutas("manzana","naranja","pera","durazno","freijova","mango", ...fruta);

