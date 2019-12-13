"use strict"


// focus, blue, keydown, keypress, keyup

window.addEventListener("load",function(){

var input=document.querySelector("#campoUno");

input.addEventListener("focus",function(){
    console.log("prueba de focus");
})

input.addEventListener("blur",function(){
    console.log("prueba de blur");
})

input.addEventListener("keydown",function(){
    console.log("prueba de focus", String.fromCharCode(event.keyCode));
})

input.addEventListener("keypress",function(){
    console.log(" tecla presionada: ",String.fromCharCode(event.keyCode));
})

input.addEventListener("keyup",function(){
    console.log("Captura el evento cuando la tecla fue soltada",String.fromCharCode(event.keyCode));
})

    
})
