"use strict";

const getPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const responseJson = await response.json();
  const divPost = document.querySelector(".divPost");
  responseJson.map((element) => {
    var divCard = document.createElement("div");
    divCard.classList = "card";
    divCard.innerHTML = `
    <div>
    <h3 id='cardTitle'> Title: ${element.title}</h3>
    </div>
    `;
    divPost.append(divCard);
  });
};

const arrow = () =>  ({nombre: "Cruz"})


function init() {
  getPost();
  console.log(arrow().nombre)
}

init();
