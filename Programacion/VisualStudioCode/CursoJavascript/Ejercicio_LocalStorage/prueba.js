"use strict"

//  

// document.addEventListener("load", function(){

//Formulario que permita añadir peliculas
//

var adicion=document.querySelector("#formulario");
var suma= document.querySelector("#listadoPeliculas");
var resta= document.querySelector("#areapellido");

adicion.addEventListener("submit",function(){

    console.log("function")
    var titulo=document.querySelector("#areanombre").value;
    // var anio=document.querySelector("#areApellido").value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }

});


console.log(localStorage)
for(let i in localStorage){
    if(typeof localStorage[i] == "string"){
        var p = document.createElement("li");
        p.append(i);
        
        suma.append(p);
    }
  

}
adicion.addEventListener("submit",function(){

    var titulo=document.querySelector("#areapellido").value;
    // var anio=document.querySelector("#areApellido").value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }

});








//})