"use strict";


var adicionar=document.querySelector("#usuarios");
var user= []


getUsuarios().then (dato => dato.json())
            .then(empleado =>{
                user=empleado;
             listado(user);
              return getInfo();

    }); 
    document.querySelector("#cargando").style.display="none";

    function getUsuarios(){
        return fetch("http://dummy.restapiexample.com/api/v1/employees");
    }

    function llamarUsuario(){

    }

    function listado(user){
        for(var i in user ){

            let imagen=document.createElement("img");
            let nombres= document.createElement("p");
    
            nombres.textContent=nombres.innnerHTML = i+". "+user[i].id+"  "+ user[i].employee_name;
            imagen.src= nombres.profile_image;
    
            adicionar.appendChild(nombres);
          //  adicionar.appendChild(imagen);

        };
    }

    function getInfo(){
             var profesor={
            "nombre" : "Jhonnatan",
            "apellido" : "posada",
            "edad" : 28,
            "url" : "https://google.com"

        },
         Promise,
         function name(resolve,reject){
            setTimeout(function(){
                return resolve(prof);
            },3000)
            
            var prof=JSON.stringify(profesor);
        

        if(typeof prof != "string")  return reject("a ocurrido un error inesperado");
    
    
        
            };
        };