'use strict'

var divData = document.querySelector('#data');

getFetch().then(data => data.json())
.then(user =>{
    displayData(user);
})


function getFetch(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function displayData(user){
user.map(index =>{
    let li = document.createElement('div');
    li.innerHTML = `<h1 id="inner">${index.email}</h1>`;
    divData.append(li)
})
}