"use strict";

const getUser = async () => {
  const getUsers = await fetch(`https://reqres.in/api/users?page=2`);

  const users = await getUsers.json();
  var usuarios = users.data;
  const divUsuarios = document.getElementById("usuarios");
  usuarios.map((element) => {
    console.log("Done");
    let createDiv = document.createElement("div");
    createDiv.classList = "card";

    let email = document.createElement("h5");
    email.classList = "cardText";

    let img = document.createElement("img");
    img.classList = "cardImage";

    email.innerHTML = element.email;
    img.src = `${element.avatar}`;

    createDiv.append(email, img);
    divUsuarios.append(createDiv);
  });
};

function init() {
  getUser();
}

init();
