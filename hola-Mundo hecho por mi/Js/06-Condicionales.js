
'use strict'

// Condiconal if
//Si A es igual a B entonces haz algo

var edad = 19;
var nombre = "David Suarez"

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + " Tiene " + edad + " Años")

    if (edad <= 33) {
        console.log("Todavia eres milenial");
    } else if (edad >= 70) {
        console.log("Eres anciano")
    } else {
        console.log("Ya no eres milenial")
    }

} else {
    console.log(nombre + " Tiene " + edad + " Años, Es menor de edad")
}

/*
//Operadores logicos
and &&
or ||
negation !
*/

// Negacion

var year = 2018
if (year != 2016) {
    console.log("El año no es 2016 relmente es: " + year)
}

// And

if (year >= 2000 && year <= 2020)  {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era moderna");
}
