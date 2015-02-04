var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Writable = require("stream").Writable;
var BrowserStream = new Writable();
var _ = require("lodash");
var open = require("open");

server.listen(7777);

var openInBrowser = _.once(function (template) {
    open(template);
    console.warn("HTTP Server open on port 7777.  Use CTRL-C to Close...");
});


// ****************************************************************************
// rawStream():
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
// BrowserStream():
//   BrowserStream is a stream which implements the Node.js writable stream API.
//   This means you can pipe data to it, etc.
//
//   More info: http://nodejs.org/api/stream.html#stream_class_stream_writable
// ****************************************************************************

BrowserStream._write = function(chunk, enc, next) {
  log(chunk.toString(enc || 'utf8'));
  next();
};

module.exports = { 
    rawStream: rawStream,
    BrowserStream: BrowserStream 
};
