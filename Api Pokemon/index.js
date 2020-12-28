"use strict";

async function getPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return await data;
  } catch (err) {
    console.log("No se encontro el Pokemon");
  }
}

async function init() {
  const form = document.getElementById("form");

  form.addEventListener("keyup", async (event) => {
    event.preventDefault();
    var inputSearch = document.querySelector("#inputSearch").value;
    const pokemon = await getPokemon(inputSearch);
    console.log(window.pokemonDisplay.pokemonName);

    try {
      window.pokemonName.textContent = pokemon.name;
      window.pokemonImg.setAttribute("src", pokemon.sprites.front_default);
    } catch (err) {
      window.pokemonImg.setAttribute(
        "src",
        "https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png"
      );
      window.pokemonName.textContent = "Pokemon";
      //console.log("Pokemon no Encontrado");
    }
  });
}

init();
