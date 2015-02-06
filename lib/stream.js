"use strict";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Writable = require("stream").Writable;
var BrowserStream = new Writable();
var _ = require("lodash");
var openWrapper = require("open");


// ****************************************************************************
// bootServer(port):
//   Helper method that boots the HTTP server for user. The server listens
//   until to user decides to close it with Ctrl-c. This is currently a point
//   of contention and we find that is is disrupting user's workflow we will
//   change it.
// ****************************************************************************

var bootServer = function(port) {
  server.listen(port);
};

// ****************************************************************************
// closeServer():
//   Closes the server. Calling this method will close any open websocket and
//   thus prevent the client from receiving data. Use with care.
// ****************************************************************************

var closeServer = function() {
  server.close();
};

// ****************************************************************************
// openInBrowser(template):
//   This is simply a helper method to open the template in the user's browser.
// ****************************************************************************

var openInBrowser = _.once(function (template) {
    openWrapper(template);
    console.warn("Sever listening on localhost:7777. Use Ctrl-c to close...");
});

// ****************************************************************************
// rawStream(data, template):
//   This implements the logic to actually write the data to the socket. If you
//   need to pass raw data to the browser, this function is for. It is a thin
//   wrapper around a simple websocket.
// ****************************************************************************

var rawStream = function(data, template) {
    openInBrowser(template);

    io.on("connection", function(socket) {
        socket.emit("domout", data);
    });

    return io.sockets.emit("domout", data);
};

// ****************************************************************************
// BrowserStream(chunk, enc, next):
//   BrowserStream is a stream which implements the Node.js writable stream API.
//   This means you can pipe data to it, etc.
//
//   More info: http://nodejs.org/api/stream.html#stream_class_stream_writable
// ****************************************************************************

BrowserStream._write = function(chunk, enc, next) {
  rawStream(chunk.toString(enc || "utf8"), "./templates/console/index.html");
  next();
};


module.exports = {
    bootServer: bootServer,
    BrowserStream: BrowserStream,
    closeServer: closeServer,
    rawStream: rawStream
};
