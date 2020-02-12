"use strict"


$(document).ready(function(){

    $("#azul").click(function(){
        $("#tituloPrincipal").removeClass("titulo").addClass("titulo2");
    });

    $("#rojo").click(function(){
        $("#tituloPrincipal").removeClass("titulo2").addClass("titulo");
    });

 /*    $("#CajaPrueba").mouseover(function(){
        $(this).css("background","red")
    })
    $("#CajaPrueba").mouseout(function(){
        $(this).css("background","orange")
    }); */

    //HOVER
    function rojo (){
        $(this).css("background","red")
    }
    function naranja(){
        $(this).css("background","orange")
    }

    $("#CajaPrueba").hover(rojo,naranja)

    //focus blur

    $("#formulario").focus(function(){
        $(this).css("border","2px solid green");
    })
    
    $("#formulario").blur(function(){
        $(this).css("border","1px solid black");
    })
});
