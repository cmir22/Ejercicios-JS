'use strict'
var n = 0;
function intWithinBounds(n, lower, upper) {
    if (typeof n == 'int') {
        if (n > lower && n < upper) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log(false)
    }
}

intWithinBounds(4.5, 3, 8);