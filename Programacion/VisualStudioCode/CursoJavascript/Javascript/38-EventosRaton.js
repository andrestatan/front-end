"use strict"

//Eventos con el mouse


    var boton= document.querySelector("#boton");

function cambioColor(){
    var colores=boton.style.background;

    if(colores=="red"){

        boton.style.background="blue";
    }   else{
       
        boton.style.background="red";
    }
    boton.style.padding="10px";
    return true;
    }

    boton.addEventListener("click",function(){
        cambioColor();
    });

    boton.addEventListener("mouseover",function(){
        boton.style.background="#ccc";
    })

    boton.addEventListener("mouseout",function(){
        boton.style.background="pink";
    })

