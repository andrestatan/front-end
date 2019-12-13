"use strict"

window.addEventListener("load",function(){

    function intervalo(){
    var tiempo=setInterval(function(){
        console.log("setInterval ejecutado");

        var titulo= document.querySelector("#prueba");

        var tit=titulo.style.background;

        if(tit=="blue"){
        titulo.style.background="red";
        titulo.style.padding ="10px";
        titulo.style.fontSize = "20px";
        } else {
        titulo.style.background="blue";
        titulo.style.padding ="20px";
        titulo.style.fontSize = "30px";
        }
       
    }, 2000);

    return tiempo;
    }

    var tiempo=intervalo();

    var detener=document.querySelector("#Terminar");
    detener.addEventListener("click",function(){
        clearInterval(tiempo);
        window.alert("Intervalo Detenido")
    });

        var iniciar=document.querySelector("#empezar");
        iniciar.addEventListener("click",function(){
            intervalo();
            console.log("Intervalo iniciado")
        });
    

    
   
    
})

