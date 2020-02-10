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
        console.log("clickeado")
        $(this).addClass("clase");
    });
    //Selectores por etiqueta
    var parrafo=$("p");
    parrafo.dblclick(function(){
        if($(this).hasClass("clase")){
            $(this).removeClass("clase");
            $(this).addClass("prueba");
        }
        
    })
    $('[title="Google"]').css("background","#ccc");

    //Otros
    //$("p,a").addClass("margenSuperior");
    
    console.log($("#caja").find(".resaltado"));
    })