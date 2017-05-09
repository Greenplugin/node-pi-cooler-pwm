/**
 * Created by dobro on 09.05.17.
 */
let wPi = require('wiring-op');
let fs = require('fs');

wPi.setup('wpi');

wPi.pinMode(8, wPi.OUTPUT);
wPi.pinMode(9, wPi.OUTPUT);

wPi.digitalWrite(9, 0);

value = 0;

setInterval(function() {
    fs.readFile('/sys/devices/virtual/thermal/thermal_zone0/temp', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        let temp = Number(data);
        console.log(temp);
    });
    //wPi.digitalWrite(8, value);
    value = +!value;
}, 500);