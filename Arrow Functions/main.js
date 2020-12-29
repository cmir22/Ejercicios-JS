"use strict";

let numeros = [2, 4, 6, 8, 10, 20, 30, 40];

let numerosCuadrados = numeros.map(function (numero) {
  return numero * numero;
});

let numerosCuadradosArrow = numeros.map((numero) => numero * numero);

let numerosFiltrados = numeros.filter(numero => numero <= 10)

console.log(numerosFiltrados);
