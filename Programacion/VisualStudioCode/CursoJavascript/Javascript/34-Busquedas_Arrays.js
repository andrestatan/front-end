"use strict"

/* Arrays usando for y foreach */

var nombre=["Andres","Posada","Gustabo","Fernandez"];
var apellidos=["guzman","knox","takuma","faylan"];

var datos=[nombre,apellidos]

document.write("<h1> Prueba de Operaciones con Arrays </h1>");

for(let nom in nombre){
    document.write("<li>"+nombre[nom]+"</li>");
}

var busqueda=nombre.findIndex(function(name){
return name=="Posada"
});
console.log(busqueda)

var busqueda=nombre.find(function(name){
    return name=="Posada"
    });
    console.log(busqueda)

var numero=[10,20,30,40,50,60,70]

var busqueda=numero.some(function(name){
        return name>=80
        });
        console.log(busqueda)
        
    

