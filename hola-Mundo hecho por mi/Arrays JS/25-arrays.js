'use strict'

//Arrays o Arreglos o  Matrices

var nombre = "Manolo"

var nombres = ["Cruz Ibarra", "Ivan Susano", "Brandon Navarro"]

var lenguajes = new Array("PHP", "GO", "JAVA", "C#", "JavaScript");

//console.log(nombres[2]);
//console.log(nombres.length)

/*
var elemento = parseInt(prompt("Que elemento del array quieres: ",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto, menor que: "+nombres.length)
}else{
    alert("El seleccionado es: "+nombres[elemento]);
}

*/

// Elementos del array por pantalla
/*
document.write("<h1>Lenguajes de programacion del 2020</h1>");
document.write("<ul>")
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}
*/


for(let lenguaje in lenguajes){
    document.write("<li>" +lenguajes[lenguaje] + "</li>");
}


document.write("<h1>Lenguajes de programacion del 2020</h1>");

lenguajes.forEach((elemento, index, data) => {
    document.write("<li>" +index+" - "+ elemento + "</li>");
});

document.write("</ul>")


// Busquedas

var precios  = [10,20,50,80,12]

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP")
var busqueda = lenguajes.some(precio => precio < 80)

console.log(busqueda);