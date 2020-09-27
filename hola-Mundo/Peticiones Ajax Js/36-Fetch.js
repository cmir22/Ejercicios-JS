'use strict'

// Fetch (Ajax) y peticiones a servicios / Apis Rest
var divUsuarios = document.querySelector('#usuarios');
var usuarios = [];

fetch('https://reqres.in/api/users?page=1')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            var li = document.createElement('li');

            li.innerHTML = user.email;

            divUsuarios.appendChild(li);
        });
    })

