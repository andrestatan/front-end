"use strict"

var fecha= new Date();
var anio= fecha.getFullYear();
var mes= fecha.getMonth()+1;
var dia= fecha.getDate();
var hora= fecha.getHours();
var minutos= fecha.getMinutes();

var textoHora=`
        el año es: ${anio}
        el mes es: ${mes}
        el dia es: ${dia}
        la hora es: ${hora+":"+minutos}
`;

console.log(fecha);
console.log(textoHora);