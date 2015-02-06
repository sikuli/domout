"use strict";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
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
  console.warn("Server listening on localhost:7777. Use Ctrl-c to close...");
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

var openInBrowser = _.once(openWrapper);

// ****************************************************************************
// rawStream(data, template):
//   This implements the logic to actually write the data to the socket. If you
//   need to pass raw data to the browser, this function is for. It is a thin
//   wrapper around a simple websocket.
// ****************************************************************************

var rawStream = function(data, template) {
  if (!template) {
    throw new Error("Template not set, make sure you have something to pipe to!");
  }

  openInBrowser(template);

  console.log(data);

  io.on("connection", function(socket) {
    socket.emit("domout", data);
  });

  return io.sockets.emit("domout", data);
};


module.exports = {
  bootServer: bootServer,
  closeServer: closeServer,
  rawStream: rawStream
};
