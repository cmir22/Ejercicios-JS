'use strict'

// PRUEBAS DE VAR Y LET


// Prueba con var
var numero = 40;
console.log(numero); //Valor 40

if(true){
    var numero = 50;
    console.log(numero); //Valor 50
}

console.log(numero); //Valor 50


// Prueba con let

var texto = "Curso Victor Robles";

console.log(texto); // Valor ''

if(true){
    let texto = "Curso Larabel 5";
    console.log(texto); // Valor Larabel 5
}

console.log(texto); // Valor js