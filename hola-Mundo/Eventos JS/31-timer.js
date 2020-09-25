'use strict'

// Timers
// Tambien existe el settimeout pero solo se ejecura una sola vez
var tiempo = setInterval(function(){
    console.log("Set interval ejecutando");
    

    var encabezado = document.querySelector('h1');
    if(encabezado){

    }
},3000)

var stop = document.querySelector('#stop');

stop.add