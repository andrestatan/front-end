"use strict"

var pelicula=function(nombre){
return "La pelicula es: "+nombre;
};

function suma(numero1,numero2,sumaMuestra,sumaDos){
    var sumar=numero1+numero2;
    sumaMuestra(sumar);
sumaDos(sumar);
return sumar;}

// console.log(suma(2,5))

suma(2,5, function(dato){
console.log("La suma es: "+dato);
},
function(dato){
 console.log("La suma por dos es: "+(dato*2));
});