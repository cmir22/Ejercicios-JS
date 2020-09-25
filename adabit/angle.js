'use strict'


var angule1 = 0, angule2 = 0;

function time(angle1, angle2) {


    var degrees = angle1 + angle2;
    var msg;
    degrees = 180 - degrees;

    if (degrees < 90) {
        msg = 'acute';
    };
    if (degrees === 90) {
        msg = 'right';
    };
    if (degrees > 90 && degrees <= 180) {
        msg = 'obtuse';
    };

    console.log(msg);
}

time(31, 100)

