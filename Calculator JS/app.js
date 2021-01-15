"use strict";

function getNumbers() {
  const form = document.getElementById("form");

  form.addEventListener("submit", () => {
    console.log("clickeo");
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    operation(parseInt(number1), parseInt(number2))
  });
}

const operation = (number1,number2) => {
    var total = number1 + number2
    alert(total)
}

function init() {
  getNumbers();
}

init();
