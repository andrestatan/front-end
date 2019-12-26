"use strict"

var numero=5456456;
var texto="Hola mundo este es un mensaje de prueba de practica";

//Plantillas de texto


var nombre=window.prompt("ingrese su nombre");
var apellido=window.prompt("Ingrese su apellido");


//El codigo ascii para las comillas invertidas es 96
var prueba=`
        <h1>Hola que tal</h1>
        <h4>Mi nombre es: ${nombre}</h4>
        <h4>Mi apellido es: ${apellido}</h4>
        `;

document.write(prueba);