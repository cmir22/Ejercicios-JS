"use strict";

const btn = document.querySelector("#btn");
var inputArea = document.querySelector("#inputArea");

btn.addEventListener("click", (func) => {
  var name = "Cruz";
  inputArea = inputArea.value;
  var firebaseRef = firebase.database().ref();

  firebaseRef.child(name).push(inputArea);
  console.log(inputArea);
});
