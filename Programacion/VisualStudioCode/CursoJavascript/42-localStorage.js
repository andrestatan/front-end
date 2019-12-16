"use strict"

//localstorage


//Comprobar Disponibilidad del Local Storage

if(typeof(Storage) !== "undefined"){
    console.log("compatible")
} else{
    console.log("Incompatibles");
}

//Guardar Datos


localStorage.setItem("titulo","Curso de JS");


//Recuperar Elemento y meterlo en pag WEB


document.querySelector("#pelis").innerHTML = localStorage.getItem("titulo");

var pelicula={
    titulo:"pokemon",
    anio:"2019",
    pais:"Japon"
}
localStorage.setItem("usuario",JSON.stringify(pelicula));

var user=JSON.parse(localStorage.getItem("usuario"))

console.log(user)