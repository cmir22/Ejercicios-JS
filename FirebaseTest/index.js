'use strict'

const db  = firebase.firestore();

var form = document.querySelector("#form")

form.addEventListener('submit', e =>{
    var inputCollection = document.querySelector("#inputCollection").value;
    var inputTitle = document.querySelector("#inputTitle").value;
    var inputText = document.querySelector("#inputText").value;

    db.collection(`${inputCollection}`).doc("uno").set({
        inputTitle,
        inputText
    })
})