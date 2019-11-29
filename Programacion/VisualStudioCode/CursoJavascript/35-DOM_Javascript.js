"use strict"

//DOM Document Object Model

//var identificacion=document.getElementById("prueba");
var identificacion=document.querySelector("#prueba");

function cambio(color){

    identificacion.style.background=color;
}


identificacion.innerHTML="Modificacion del titulo desde Javasacript";
identificacion.style.background= "black";
identificacion.style.color="white";
identificacion.style.border="10px white";
identificacion.className="cambio";

console.log(identificacion);

var diva=document.getElementsByClassName("NPI");
diva[0].style.background="blue";
console.log(diva);