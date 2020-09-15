'use strict'

// Muestra como se pueden usar variables globales y variablers que solo fucnionan dentro del metodo(funcion)

var texto = "Hola Mundo soy una Variable Global";
var numero = 12;

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}


holaMundo(texto);
