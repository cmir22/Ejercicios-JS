'use strict'

// Formulario para añadir peliculas
// Boton guardar peliculas
// Mostrar en pantalla las peliculas que greguemos


var formulario = document.querySelector('#formulario');
var formularioBorrar = document.querySelector('#formularioBorrar');


formulario.addEventListener('submit', submit =>{
    var entrada = document.querySelector('#input').value;
    localStorage.setItem(entrada,entrada);


var ul = document.querySelector('#peliculas_list');

for (var i in localStorage){
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement('li')
        li.append(localStorage[i]);
        ul.append(li);
    }
}

}

);

formularioBorrar.addEventListener('submit', submit =>{
    
var entrada = document.querySelector('#inputBorrar').value;
    localStorage.removeItem(entrada);
    

})
