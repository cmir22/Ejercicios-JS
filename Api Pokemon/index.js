'use strict'

const apiPokemon = async (pokemon) => {

    const setPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const getPokemon = await setPokemon.json();

    var habilidades = getPokemon.abilities

    var pokemonId = getPokemon.id

    const setPokemonForm = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`)

    const getPokemonForm = await setPokemonForm.json();

    var getPokemonImg = getPokemonForm.sprites.front_default

    
    habilidades.map(element => {
        const divCards = document.querySelector('#divCards');
        var div = document.createElement('div')
        div.className = 'card'
        div.id = 'carta'
        var ability = element.ability.name
        div.innerHTML = `
        <h5>${ability}</h5>
        <img src="${getPokemonImg}">
        `  
        divCards.append(div)
        console.log(ability)
         
    });

}

apiPokemon('ivysaur')