'use strict'

// Mostrar todos los numeros impares entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introduce el primer numero: ",0));
var numero2 = parseInt(prompt("Introduce el primer numero: ",0));


while(numero1 < numero2){

    numero1++;

    if(numero1%2 != 0){
        console.log("Es impar: "+numero1)
    }


}