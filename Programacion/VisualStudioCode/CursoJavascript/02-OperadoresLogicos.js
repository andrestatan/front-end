"use strict"

//Negacion
var year=2019;
if(year!=2016){
    console.log("el año no es 2016, realmente es: "+year);
}

//AND
if(year >=2000 && year <=2020){
    console.log("estamos en la era actual")
}else{
    console.log("estamos en otra era");
}

//OR  // TODO: Como apunte general el codigo Asqui de | es 124
if(year ==2009 || year==2019){
    console.log("El año acaba en 9 xD");
}

if(year ==2009 || (year>=2019 && year==2119)){
    console.log("El año acaba en 9 xD");
}else{
    console.log("Año no es registrado");
}