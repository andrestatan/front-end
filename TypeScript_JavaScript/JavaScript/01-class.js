// Primer funcion Curso Js

function holaMundo() {
    let botonLabel =  document.getElementById("boton").innerHTML;
    if(botonLabel === "Da un Click"){
        document.getElementById("textoPrueba").innerHTML = "Hola soy un nuevo Mensaje";
        document.getElementById("boton").innerHTML = "Da otro Click";
    } else {
        document.getElementById("textoPrueba").innerHTML = "";
        document.getElementById("boton").innerHTML = "Da un Click";
    }

}

// Calculo de si es par o impar

function numeroPar(){
    let num = document.getElementById("my-input").value;
    let valor = num % 2;
    if(num != undefined && num != ''){
    valor == 0?
        this.crearNuevoValor("p","El numero " + num + " es par","text-success","impar","numerosPares") :
        this.crearNuevoValor("p","El numero " + num + " es impar","text-danger", "impar","numerosPares");
    } else {
        this.crearNuevoValor("p",null,"text-danger", "impar","numerosPares");
    }
}

// Funcion para calcular la edad

function calcularEdad(){
    let edad = document.getElementById("edad").value;

    if(edad != null && edad != ""){
       edad >= 18 ? this.crearNuevoValor("p","Usted es Mayor de Edad","text-success","anios","edadMayoroMenor")
       :this.crearNuevoValor("p","Usted es Menor de Edad","text-danger","anios","edadMayoroMenor")
    } else {
        this.crearNuevoValor("p",null,"text-danger","anios","edadMayoroMenor")
    }
}
//Funcion para crear nuevas etiquetas en el html, funcionamiento Generico

function crearNuevoValor (etique, texto, clase, id, idPadre){
    const padre = document.getElementById(idPadre)
    let validacion_elemento = document.getElementById(id);
    validacion_elemento == null ? validacion_elemento =  validacion_elemento : validacion_elemento.remove();

    if(texto != null){
        let etiqueta = document.createElement(etique)
        etiqueta.innerHTML= texto;
        etiqueta.className = clase;
        etiqueta.id = id;
        padre.appendChild(etiqueta)
    } else {
        let etiquet = document.createElement(etique)
        etiquet.innerHTML= "Ingrese un valor valido";
        etiquet.className = clase;
        etiquet.id = id;
        padre.appendChild(etiquet)

        setTimeout(() => {
            let limpiar = document.getElementById(id)
            limpiar.remove()
        }, 2000);
    }
}
