'use strict'

var api = []

fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(data => {
    data = data.email
    console.log(data)
})