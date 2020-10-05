'use strict'

/*
Un progreama que pida 6 numeros por pantalla y los meta en un array
mostrar el array entero en el cuerpo de la pagina y la consola
obtener el numero ordenado y mostrarlo
invertir su orden y mostrarlo
mostrar cuantos elementos tiene el array
busqueda de un valor introducido por le usuario y que nos siga si lo encuenrtra y su indice
*/


var numero = [];
var numeroIntroducido = 0;

while (numero.length <= 5) {

    numeroIntroducido = parseInt(prompt("Introuzca un numero al array: ", 0));

    numero.push(numeroIntroducido);

}

for (let numeros in numero) {
    document.write("<li>" + numero[numeros] + "</li>")
}




numero.sort();
numero.reverse();

console.log("El array tiene: "+numero.length+" numeros")

console.log(numero);

var numeroBuscar = parseInt(prompt("Que Numero quiere buscar: ", 0));

var busqueda = numero.find(numero => numero == numeroBuscar);



console.log(busqueda);