'use strict'

const getData = async (idPost) => {
    const datos = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)

    const datosJson = await datos.json();
    
    console.log(datosJson.id)

    const usuario = await fetch(`https://jsonplaceholder.typicode.com/users/${datosJson.id}`)

    const usuarioJson = await usuario.json();

    console.log(usuarioJson.name)
}

getData(4)