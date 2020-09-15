'use strict'

// Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

//var texto = "Mi nombre es: "+nombre+" Mis Apellidos son: "+apellidos;

var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre} </h3>
<h3> Mi Apellido es: ${apellidos}</h3>
`

document.write(texto)