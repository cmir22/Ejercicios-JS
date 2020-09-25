'use strict'

// Local Storage
//  Guardamos informacion aunque cambiemos de pagina dentro de la pagina

const nombre = "Manuelito";

// Comprobar si el navegador es compatible con el local storage
if(typeof (localStorage) != 'undefined'){
    console.log('LocalStorage es Compatible')
}else{
    console.log('No es Compatible con LocalStorage')
}

// Guardar datos en el localStorage
localStorage.setItem("titulo","Curso de Symfony de Victor Robles");

// Recuperar elemento del localStorage
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));

// Guardar Objetos
var usuario = {
    nombre: 'Cruz Ibarra',
    email: 'manolo@gmail.com',
    web: 'www.montuosa.org'
};

localStorage.setItem('usuario',JSON.stringify(usuario));

// Recuperar Objeto
var usersjs = JSON.parse(localStorage.getItem('usuario'))

document.querySelector('#datos').append(usersjs.nombre); 

// Eliminar un elemento
localStorage.removeItem('usuario');

// Eliminar todos los elemetnos
localStorage.clear();