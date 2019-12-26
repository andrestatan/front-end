"use strict"


// focus, blue, keydown, keypress, keyup

window.addEventListener("load",function(){

var input=document.querySelector("#campoUno");

input.addEventListener("focus",function(){
    console.log("Estas Dentro del Input");
})

input.addEventListener("blur",function(){
    console.log("Acabaste de salir del Input");
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
