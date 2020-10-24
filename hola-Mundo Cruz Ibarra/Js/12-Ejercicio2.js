'use strict'

// Utilizando un buble mostrar la suma y la media de los numneros introducir hasta que en numero sea negatvio

var suma = 0;
var contador = 0;

do {

    var numero = parseInt(prompt('introduce un numero hasta que metas un negativo', 0));

    contador ++;

    suma = suma + numero;

    console.log(suma);

} while (numero >= 0)

console.log(suma);
