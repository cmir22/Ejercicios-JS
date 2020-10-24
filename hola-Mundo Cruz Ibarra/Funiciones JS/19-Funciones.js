'use strict'

//Funciones
// Una funcion es una agrupacion  reutilizable de un conjunto de instrucciones



function porConsola(numero1, numero2, mostrar = false) {
    console.log("*****************************************")
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2) );
    console.log("Division: " + (numero1 / numero2) );
    console.log(mostrar)
    console.log("*****************************************")
}

function porPantalla(numero1, numero2, mostrar = false) {
    document.write("*****************************************" + "<br>")
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Division: " + (numero1 / numero2) + "<br>");
    document.write(mostrar + "<br>")
    document.write("*****************************************" + "<br>")
}


function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        porConsola(numero1, numero2);

    } else {
        porPantalla(numero1, numero2);
    }

    return true;
}

//Poner la funcion en una variable
//var resultado = calculadora();
//console.log(resultado);

//Llamar a la funcion
calculadora(2, 5);



/*
calculadora(98, 2);
for (var i = 1; i <= 10; i++) {
    console.log(i)
    calculadora(i, 8);
}
*/