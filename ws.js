/**
 * Created by dobro on 11.05.17.
 */

websocket = new WebSocket("ws://192.168.0.101:3000");

websocket.onopen = function () {
    setInterval(function (e) {
        websocket.send('get_temp');
    },500);
};

websocket.onmessage = function (evt) {
    $('.temp').html(evt.data);
};

websocket.onerror = function (evt) {

};


function sendMessage(message) {

}



