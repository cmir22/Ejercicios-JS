'use strict'

//DOM Document Oject Model

function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("miCaja");
//var caja = document.querySelector("#miCaja")

/*

caja.innerHTML = "Texto en la caja desde JS";

caja.style.background = "Red";
caja.style.padding = "20px";
caja.style.color = "WHITE";

caja.className = "Hola Hola2"
console.log(caja);

*/

// Conseguir elementos por su etiqueta

var todosLosDiv = document.getElementsByTagName('div');

//var contenidoEnTexto = todosLosDiv[2];
//contenidoEnTexto.innerHTML =  "Nuevo texto del segundo"

//todosLosDiv.forEach((valor, indice) => {
    var valor;
  for(valor in todosLosDiv){
      if(typeof todosLosDiv[valor].textContent == "string"){
    var parrafo = document.createElement("p")
    var texto = document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miSeccion").appendChild(parrafo);
}
}
//});


//console.log(contenidoEnTexto);
 
// Conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = "Yellow"

console.log(divsAmarillos)

for (var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
   
}



console.log(divsRojos)


// Query selector

var id = document.querySelector('#encabezado');

console.log(id)

var claseRojo = document.querySelectorAll('div.rojo');

console.log(claseRojo);

