'use strict'

// Trasformacion de textos de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de victor robles"
var texto2 = "es muy buen curso"

var  busqueda = texto1.substr(14,5);
var  busqueda1 = texto1.charAt(44);
var  busqueda2 = texto1.search("curso");
var  busqueda3 = texto1.startsWith("Bienvenido al curso");
var  busqueda4 = texto1.endsWith("Bienvenido al curso");
var  busqueda5 = texto1.includes("JavaScript");

var  busqueda6 = texto1.replace("JavaScript","Symfony");
var  busqueda7 = texto1.slice(14);
var  busqueda8 = texto1.split(" ");
var  busqueda9 = texto1.trim();

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);