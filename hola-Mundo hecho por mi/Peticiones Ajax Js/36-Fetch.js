'use strict'

const divUsuarios = document.querySelector('#divUsuarios');
const formSearch = document.querySelector('#formSearch');


formSearch.addEventListener('submit', () => {
    var inputText = document.querySelector('#inputText').value;
    fetch('https://reqres.in/api/users?page=2')
        .then(data => data.json())
        .then(users => {
     
            users.data.map((usuarios) => {
                if (inputText === usuarios.email) {
                    var li = document.createElement('li')

                    li.innerHTML = usuarios.email;

                    divUsuarios.append(li);

                

                }


            })

        }).catch(error =>{
            console.log('Se ha detectado un error en el fetch')
            })
})


