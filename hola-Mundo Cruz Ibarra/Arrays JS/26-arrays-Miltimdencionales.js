'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La Verdad Duele','La vida es Bella','Gran Torino'];

peliculas.reverse();
console.log(peliculas)

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);


/*
while(elemento != "ACABAR"){
    var elemento = prompt("Introduce tu pelicula: ")
    peliculas.push (elemento);
    console.log(peliculas);
}
*/
//Elimina el ultimo dato del array
/*
peliculas.pop();

var indice = peliculas.indexOf('Gran Torino');
if(indice >= -1){
    peliculas.splice(indice, 1);
}
*/


var peliculas_string =peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(",")

console.log(cadena_array);
