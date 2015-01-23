'use strict';

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var log = function(string) {
  io.sockets.emit('news', string);
};

module.exports = {
  log: log
};
