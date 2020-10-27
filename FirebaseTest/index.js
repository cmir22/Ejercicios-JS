"use strict";

const db = firebase.firestore();

const form = document.querySelector('#form');
const formTareas = document.querySelector('#tareas');

docTitle.focus();

const saveData = (titulo, texto, baseDatos) => {
  db.collection("tareas").doc(`${titulo}`).set({
    texto,
  });
};

const getData = () => db.collection("tareas").get();

window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getData();
    querySnapshot.forEach(doc => {
        console.log(doc.data())
        formTareas.innerHTML += `<h4>${doc.data().texto}</h4>`
    })
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let baseDatos = document.querySelector("#docName");
  let titulo = document.querySelector("#docTitle");
  let texto = document.querySelector("#docText");

  await saveData(titulo.value, texto.value, baseDatos.value);

  form.reset();
  docTitle.focus();

  console.log(e);
});
