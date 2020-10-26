'use strict'

const db =  firebase.firestore();

const form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let docName = document.querySelector('#docName').value;
    let docTitle = document.querySelector('#docTitle').value;
    let docText = document.querySelector('#docText').value;
    
    
    db.collection(`${docName}`).doc(`${docName}`).set({
        docName,
        docTitle,
        docText
    })
})