"use strict";

const divUsuarios = document.querySelector("#usuarios");
var form = document.querySelector("#form");

form.addEventListener("submit", () => {
  var inputText = document.querySelector("#inputText").value;
  getFetch()
    .then((data) => data.json())
    .then((user) => {
      var usuarios = user.data;
      usuarios.map((index) => {
        if (inputText === index.email) {
          let li = document.createElement("li");
          li.innerHTML = index.email;
          divUsuarios.append(li);
        }
      });
    });
});

function getFetch() {
  return fetch("https://reqres.in/api/users?page=2");
}
