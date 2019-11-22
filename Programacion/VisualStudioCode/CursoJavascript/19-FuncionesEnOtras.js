"use strict"

function consola(numero1,numero2){
    console.log("El resultado de la suma es :"+(numero1+numero2)+"\n"+
                "El resultado de la resta es :"+(numero1-numero2)+"\n"+
                "El resultado de la multiplicacion es :"+(numero1*numero2)+"\n"+
                "El resultado de la division es :"+(numero1/numero2));
}

function pantalla(numero1,numero2){
    document.write("Suma "+(numero1+numero2)+"<br/>"+
            "Resta "+(numero1-numero2)+"<br/>"+
            "Multiplicacion "+(numero1*numero2)+"<br/>"+
            "Division "+(numero1/numero2)+"<br/>");
} 

function calculadora(numero1,numero2,mostrar=false){
if(mostrar==false){
    consola(numero1,numero2);
}else{
    pantalla(numero1,numero2);
}
return true;
}