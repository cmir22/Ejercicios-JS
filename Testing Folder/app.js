"use strict";

const getUsers = async (id) => {
  const response = await fetch(`https://reqres.in/api/users?page=2`);
  const responseJson = await response.json();
  const data = responseJson.data;

  data.map((element) => {
    const divUsers = document.getElementById("users");
    let divContainer = document.createElement("div");

    divContainer.innerHTML = `
    <div id="divi">
      <img src="${element.avatar}" id="image">
      <h1> ${element.first_name}</h1>
    </div>
      `;

    divUsers.append(divContainer);
  });
};

function init() {
  getUsers();
}

init();
