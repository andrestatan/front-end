"use strict"

//Browser Object Model


function obtenerBOM(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.width);
console.log(window.location.href);
}

function redirect(test){
     window.location.href=test;
}

function abrir(url){
    window.open(url,"","width=400, height=400");
}