'use strict'

//Eventos del raton

window.addEventListener('load', () =>{
    function cambiarColor(){
    console.log("Me has dado click")
    var bg = boton.style.background;
    if (bg == "green"){
        boton.style.background = "Red"
    }else{
        boton.style.background = "Green"
    }

    return true;
}

var boton = document.querySelector('#boton');

// Click desde javascript
boton.addEventListener('click',cambiar => {
    cambiarColor();
});

// Mouse Over
boton.addEventListener('mouseover', cambiar =>{
    boton.style.background = "yellow";
});

// Mouse Out
boton.addEventListener('mouseout', cambiar =>{
    boton.style.background = "gray";
});

// Focus
var input = document.querySelector("#campo_nombre")

input.addEventListener('focus', cambiar =>{
    console.log("Estas haciendo focus en el input")
});

// Blur
input.addEventListener('blur', cambiar =>{
    console.log("Estas fuera del Input")
});

// Key Down
input.addEventListener('keydown', function (event){
    console.log("Pulsando esta tecla",String.fromCharCode(event.keycode));
});

// Key Press
})

