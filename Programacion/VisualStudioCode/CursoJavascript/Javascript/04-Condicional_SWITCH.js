"use strict"

// switch
console.log("Condicional Switch");
var imprime=""
var edad=window.prompt("18, 25, 40, 75 o puedes escoger otra");

switch(edad){
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime="Ya eres un adulto";
        break;
    case 40:
        imprime="Crisis de los 40";
    break;
    case 75:
        imprime="Eres ya un anciano";
    break;
    default:
        imprime="Tu edad es neutral";
}
console.log(imprime);