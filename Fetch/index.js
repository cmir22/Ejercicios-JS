'use strict'

const divUsuarios = document.querySelector('#usuarios');
var usuarios = [];

getFetch().then(data => data.json()).then(function (users) {
  getUsers(users)
  
})

function getFetch(){
  return fetch('https://jsonplaceholder.typicode.com/users')
}

function getUsers(users){
users.map(index =>{
  let li = document.createElement('p');
  li.innerHTML = index.name;
  divUsuarios.append(li)
})
}


