'use strict'

// JSON son las sigla de javacript object notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    { titulo: 'La Verdad Duele', year: 2016, pais: 'francia' },
    pelicula
]

var caja = document.querySelector('#caja');


for(var index in peliculas){
    console.log(peliculas[index].titulo+" - "+peliculas[index].year)
}

console.log(peliculas);