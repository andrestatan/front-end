"use strict"

//DOM Document Object Model

//var identificacion=document.getElementById("prueba");
var identificacion=document.querySelector("#prueba");

function cambio(){
    var colores=window.prompt("Ingrese el color a usar");
    identificacion.style.background=colores;
}


identificacion.innerHTML="Modificacion del titulo desde Javasacript";
identificacion.style.background= "black";
identificacion.style.color="white";
identificacion.style.border="10px white";
identificacion.className="cambio";
identificacion.style.padding="20px";

console.log(identificacion);

var diva=document.getElementsByClassName("NPI");
diva[0].style.background="blue";
console.log(diva);