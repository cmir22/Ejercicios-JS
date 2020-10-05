'use strict'

//Haacer un programa que al introducir dos numeros me diga que numeros hay entre ellos


var numero1 = parseInt(prompt("Introduzca el numero 1", 0));
var numero2 = parseInt(prompt("Introduzca el numero 2", 0));


if (numero1 > numero2) {
    var rango1 = numero1;
    var rango2 = numero2 + 1;

    for (rango2; rango2 < rango1; rango2++) {
        console.log("Los numeros son: " + rango2)
    }

}

if (numero2 > numero1) {
    var rango1 = numero1 + 1;
    var rango2 = numero2;

    for (rango1; rango1 < rango2; rango1++) {
        console.log("Los numeros son: " + rango1)
    }
}
