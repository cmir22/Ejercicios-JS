"use strict";

const getUsers = async (id) => {
  const response = await fetch(`https://reqres.in/api/users?page=2`);
  const responseJson = await response.json();
  const users = responseJson.data;
  displayUsers(users);
};

function displayUsers(users) {
  var usuarios = document.querySelector(".usuarios");
  users.map((element) => {
    var divUser = document.createElement("div");
    var image = document.createElement("img");
    divUser.classList = "divUser";
    divUser.innerHTML = `
      <h2>Number: ${element.id}</h2>
      <img src="${element.avatar}" />

      `;
    usuarios.append(divUser);
  });
}

function init() {
  getUsers();
}

init();
