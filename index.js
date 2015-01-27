/*global Writable*/

"use strict";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Writable = require("stream").Writable;
var BrowserStream = new Writable();

server.listen(7777);

var log = function(string) {
  io.sockets.emit("news", string);
};

BrowserStream._write = function(chunk, enc, next) {
  log(chunk.toHTML());
  next();
};

module.exports = {
  log: log,
  BrowserStream: BrowserStream
};
