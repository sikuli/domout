var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var open = require('open');

app.listen(8080);

var clientTemp = '\
<html>\
<head>\
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>\
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>\
<script>\
    var socket = io();\
    socket.on("news", function (data){ \
        $("#left").text(data["stuff"]);\
        socket.emit("something", "coooool");\
    });\
</script>\
</head>\
<body>\
<div id="left">\
</div>\
</body>\
    ';


function handler (request, response) {
    response.writeHead(200);
    response.end(clientTemp)

}

io.on('connection', function (socket) {
    socket.emit('news', { "stuff": "sweeeeeet!"});
    socket.on("something", function (data) {
        console.log(data);
    });
});

open("http://localhost:8080");

console.log(process.argv);


