"use strict";

const getData = async (idPost) => {
  const datos = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}`
  );

  const datosJson = await datos.json();

  console.log(datosJson.id);

  const usuario = await fetch(
    `https://jsonplaceholder.typicode.com/users/${datosJson.id}`
  );

  const usuarioJson = await usuario.json();

  const divUsuario = document.querySelector("#usuario");
  
  var h3 = document.createElement("h3");
  h3.innerHTML = usuarioJson.name;
  divUsuario.append(usuarioJson.name);
};

function searchUser() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = document.querySelector("#inputValue");
    getData(inputValue.value);
  });
}

searchUser();
