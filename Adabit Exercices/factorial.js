'use strict'


const numero = 5;
var total = 1;

function calculate(number) {
    
    for (var cont = number; cont >= 1; cont--) {
        total = total * cont;
        if (cont == 1) {
            console.log(total)

        }
    };
}

calculate(numero);