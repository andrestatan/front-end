"use strict"

window.addEventListener("load",function(){

    var forma= document.querySelector("#formulario");
    var mostrar= document.querySelector("#mostrar");
  

    forma.addEventListener("submit",function(){

        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellido").value;
        var edad=parseInt(document.querySelector("#edad").value);

        if(nombre.trim().lenght==0 || nombre.trim() == null){
            window.alert("Ingrese el valor correcto");
            return false;
        }
        
        if(apellido.trim().lenght==0 || apellido.trim() == null){
            window.alert("Ingrese el valor correcto");
            return false;
        }
        
        if(edad>=100 || edad<=0 || isNaN(edad) || edad== null){
            window.alert("Indrese su edad Correcta");
            return false;
        }

        var alerta= `
        Su nombre es: ${nombre} 
        Su apellido es: ${apellido} 
        Su edad es de: ${edad}`

        var crear=document.createElement("p");
        crear.append(alerta);

        mostrar.appendChild(crear)
  
   })

  

   

})

