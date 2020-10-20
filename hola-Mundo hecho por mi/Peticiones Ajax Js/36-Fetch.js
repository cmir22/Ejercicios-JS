'use strict'

var divUsuarios = document.querySelector("#usuarios");
var datos = [];


getFetch().then(data => data.json())
.then(user =>{
  datos = user.data;
  printOnScreen(datos)

})


function getFetch(){
  return fetch('https://reqres.in/api/users?page=2');
}

function printOnScreen (datos){
  datos.map(index =>{
    var li = document.createElement("h3")
    li.innerHTML = index.email;

    divUsuarios.append(li)
  })
  console.log(datos)
}