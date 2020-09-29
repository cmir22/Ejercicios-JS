'use strict'

var divUsuarios = document.querySelector('#usuarios');
var divSingleUser = document.querySelector('#singleUser');

getFetch().then(data => data.json())
    .then(user => {
        getUsers(user.data);

        return getOneUserFetch();

    })
    .then(data => data.json())
    .then(singleUser => {
        getSingleUser(singleUser.data);

    })




function getFetch() {
    return fetch('https://reqres.in/api/users?page=2')
}

function getOneUserFetch() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {

    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'http://www.victorroblesweb.es'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != 'string') return reject('error');

        return resolve(profesor_string);
    })




}


// WE GET ALL USER
function getUsers(user) {

    user.map((index, i) => {

        var li = document.createElement('li');

        li.innerHTML = (i + 1) + " " + index.email;

        divUsuarios.append(li);

        document.querySelector('#loading').style.display = 'none'
    })

}

// WE GET JUST ONE USER
function getSingleUser(user) {


    var li = document.createElement('li');

    li.innerHTML = user.email;
    li.style.color = "red";

    divSingleUser.append(li);



}
