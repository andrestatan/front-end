"use strict"

/* Realizar una calculadora
1. pida dos numeros por pantalla, debe vverificar que ambos numeros esten bien
2. Mostrar en el body, en una alerta y por la consola el resultado de 
sumar restar multiplicar y dividir las dos cifras*/

//Declaracion de Variables requeridas
var numero1=parseInt(window.prompt("Ingrese el primer numero",0));
var numero2=parseInt(window.prompt("Ingrese el segundo numero",0));

while(isNaN(numero1) || isNaN(numero2)||numero2 < 0 || numero1 < 0){
    numero1=parseInt(window.prompt("Ingrese nuevamente el primer numero",0));
    numero2=parseInt(window.prompt("Ingrese nuevamente el segundo numero",0));
}

//Tabla de Operaciones
var suma=numero1+numero2;
var resta=numero1-numero2;
var multiplicacion=numero1*numero2;
var Division=numero1/numero2;

// Mensajes mostrados por Consola
console.log("El resultado de la suma es :"+suma+"\n"+
             "El resultado de la resta es :"+resta+"\n"+
             "El resultado de la multiplicacion es :"+multiplicacion+"\n"+
             "El resultado de la division es :"+Division);

// Mensajes mostrados por el Tbody
document.write("El resultado de la suma es :"+suma+"<br>"+
                "El resultado de la resta es :"+resta+"<br>"+
                "El resultado de la multiplicacion es :"+multiplicacion+"<br>"+
                "El resultado de la division es :"+Division+"<br>");

// Mensajes mostrados por Alertas
window.alert("El resultado de la suma es :"+suma+"\n"+
             "El resultado de la resta es :"+resta+"\n"+
             "El resultado de la multiplicacion es :"+multiplicacion+"\n"+
             "El resultado de la division es :"+Division);