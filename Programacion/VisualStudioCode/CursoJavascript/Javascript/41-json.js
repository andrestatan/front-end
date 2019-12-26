" use strict"

var pelicula={
    titulo:"pokemon",
    anio:"2019",
    pais:"Japon"
}

//pelicula.titulo="shawna lenne"

var peliculas=[
{  titulo: "muero de la risa", anio:"2018", clase:"peli"},

pelicula
];

console.log(peliculas);


var imprimir
var imp=document.querySelector("#pelis");

for(imprimir in peliculas){

    var crear=document.createElement("p");

crear.append(peliculas[imprimir].titulo+ " - " +peliculas[imprimir].anio);
 
imp.append(crear);

}



