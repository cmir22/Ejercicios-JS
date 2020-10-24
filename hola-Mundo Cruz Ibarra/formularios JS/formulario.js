'use strict'

var formulario = document.querySelector('#formulario');


window.addEventListener('load', function () {

    formulario.addEventListener('submit', submit => {
        //console.log('funciona')

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;



        const mostrar = [nombre, apellido, edad];

        mostrar.forEach((elemento, index) => {
            var parrafo = document.createElement("p")
            parrafo.innerHTML = mostrar[index];
            console.log(mostrar[index]);

        });




    })


})

