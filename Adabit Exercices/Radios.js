'use strict'

var radio = parseInt(prompt("Introduce el Radio: ", 0));

var perimetro = 0;
var area = 0;



function calculate(perimetro, area) {

    perimetro(radio);
    area(radio);
    console.log("Radio: " + radio)
    return (radio);

}


calculate(radio => {
    perimetro = ((2 * 3.1416) * radio);
    console.log("Perimetro: " + perimetro);

}, radio => {
    area = (3.1416 * (radio * radio));
    console.log("Area: " + area);
})
