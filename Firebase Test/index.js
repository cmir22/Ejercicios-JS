"use strict";

//Firebase conection
const db = firebase.firestore();
//Variables
const form = document.querySelector("#form");
const displayDb = document.querySelector("#database");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  var name = document.querySelector("#inputName").value;
  var country = document.querySelector("#inputCountry").value;
  await saveData(name, country);
});

const saveData = (name, country) => {
  db.collection("nombres").doc(`${country}`).set({
    nombre: name,
  });
};

const getData = () => db.collection("nombres").get();

window.addEventListener("DOMContentLoaded", async (e) => {
  const querySnapshot = await getData();
  querySnapshot.forEach(doc => {
    displayDb.innerHTML += `<p id="base">${doc.data().nombre}</p>`;
  });
});
