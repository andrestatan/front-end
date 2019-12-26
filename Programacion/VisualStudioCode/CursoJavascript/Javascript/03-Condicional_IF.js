"use strict"

//Uso de las condicionales 

// estructura condicional IF
var edad1=30;
var edad2=12

if(edad1>edad2){
console.log(edad1+" es mayor que "+edad2);
} else{
    console.log("la "+edad1+" es inferior")
}


//Ejercicio mas simple
var nombre=window.prompt("Ingrese su nombre");
var edad= window.prompt("Ingrese su edad");

if(edad==33){
    console.log(nombre+" Todavia eres milenial");
}

if(edad>18){
    console.log(nombre+" usted es mayor de edad");
}else{
    console.log(nombre+ " usted es menor de edad");
}
