/**
 * Created by dobro on 09.05.17.
 */
let wPi = require('wiring-pi');

wPi.setup('wpi');

wPi.pinMode(8, wPi.OUTPUT);
wPi.pinMode(9, wPi.OUTPUT);

wPi.digitalWrite(9, 0);

value = 0;

setInterval(function() {
    wPi.digitalWrite(8, value);
    value = !value;
}, 500);