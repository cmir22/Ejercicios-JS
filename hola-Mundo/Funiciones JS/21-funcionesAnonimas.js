'use strict'

//Funciones anonimas
//Funciones que no tienen nombre
//Se usa para hacer callback es una funcion que se ejecuta dentero de otra


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return (sumar)
}

// Funciones de flecha es =>
// Significa como abreviacion de la palabra function & no es necesario ya utilizar el parentecis

sumame(5, 7, dato => {
    console.log("La suma es: " + dato);
}, dato => {
    console.log("La suma por dos es: " + (dato * 2));
})