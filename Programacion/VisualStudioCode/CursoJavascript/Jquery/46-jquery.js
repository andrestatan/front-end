"use strict"

// Selectores con Jquery

$(document).ready(function(){
    // Selector de ID

    var prueba=$("#parrafo1")
    prueba.css("background","blue")
    .css("color","white")

    var pruebas=$("#parrafo2")
    pruebas.css("background","red")
    .css("color","white");
    

    // Selector de Clase
    var clase= $(".prueba")
    clase.css("background","blue");
    console.log(clase[1]);

    var borde=$(".sinBorde");
    borde.click(function(){
        

    });
    })