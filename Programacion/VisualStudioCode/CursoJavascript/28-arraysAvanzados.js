"use strict"

/* Arrays usando for y foreach */

var nombre=["andres","posada","Gustabo","Fernandez","Pedro","Pascual"];

document.write("<h1> Prueba de Arrays con el for y For each </h1>");
document.write("<br>");
document.write("<h3> uso del elemento for para el array </h3>");
document.write("<ol>");
for(let a=0; a<nombre.length;a++){
    document.write("<li>"+nombre[a]+"</li>");
}
document.write("</ol>");
document.write("<h3> uso del elemento for Each para recorrer el array </h3>");
//Itera todo el array y lo muestra
nombre.forEach(function(nombre){
    document.write("<li>"+nombre+"<hr> </li>");
})