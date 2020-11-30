"use strict";

const divData = document.querySelector("#data");

getFetch()
  .then((data) => data.json())
  .then((user) => {
    displayData(user);
  });

function getFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function displayData(user) {
  user.map((index) => {
    let div = document.createElement("div");
    div.className = "nombres";
    div.innerHTML = `
    <h3 id="titulo">${index.name}</h3>
    <h4>Email: ${index.email}</h4>
    <h4>Phone: ${index.phone}</h4>
    `;
    divData.append(div);
  });
}
