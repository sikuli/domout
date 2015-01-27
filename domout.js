var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var open = require('open');
var name = io.of('/domout');

var socket;
var ready = 0;

function handler (request, response) {
        response.writeHead(200);
        response.end(clientTemp);
};

var domout = module.exports = {

    log: function (data) {

        if (ready == 0) {
            app.listen(8080);
            
            open("http://localhost:8080");

            name.on('connection', function (socket) {
                socket.emit('domout', data);
                socket.on('callback', function (data) {
                    console.log(data);
                    ready = 1;
                })
            });
        } else {
            console.log('log fired');
            io.sockets.emit('domout', data);
        }
    }
};


var clientTemp = '\
<html>\
<head>\
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>\
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>\
<script>\
    var socket = io("http://localhost:8080/domout");\
    socket.on("domout", function (data){ \
        for (var key in data) { \
            if (data.hasOwnProperty(key)) { \
                $("body").append("<div id="+key+"></div>"); \
                $("#"+key).text(data[key]); \
            }\
        } \
        socket.emit("callback", "got it!");\
    });\
</script>\
</head>\
<body>\
<div id="left">\
</div>\
</body>\
';

