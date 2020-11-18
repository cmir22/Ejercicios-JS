'use strict'

// Contection with  Firebase
const db = firebase.firestore();
// Get the form
const form = document.querySelector('#form');
const divDatabase = document.querySelector('#database');

const setData = (namePokemon,typePokemon,colorPokemon) => {
db.collection('Pokemons').doc(`${namePokemon}`).set({
  Name: namePokemon,
  Type: typePokemon,
  Color: colorPokemon
})
}

form.addEventListener('submit', async(e) =>{
e.preventDefault();
let namePokemon = document.querySelector('#name').value;
let typePokemon = document.querySelector('#type').value;
let colorPokemon = document.querySelector('#color').value;
await setData(namePokemon,typePokemon,colorPokemon)
form.reset();
})

const getData = () => db.collection('Pokemons').get();

window.addEventListener('DOMContentLoaded', async (e)=>{
  const querySnapshot = await getData();
  querySnapshot.forEach(index =>{
    divDatabase.innerHTML += `<h1>${index.data().Name}</h1>`
  })
})
