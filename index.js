/*global Writable*/

"use strict";

var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var Writable = require("stream").Writable;
var BrowserStream = new Writable();

var glob = require("glob");
var _ = require("lodash");

server.listen(7777);

// ****************************************************************************
// setupTemplateEntryPoints():
//   Glob grab all of the templates inside of templates/** and create an object
//   which corresponse to:
//      templateName: entryFunction
//
//   This allows a user to create an template easily. All that has to be done
//   is:
//      1. Create your index.html (which will be served to the client)
//      2. Create a template.js which defines how to parse and return data to
//         the client-side app.
// ****************************************************************************

var setupTemplateEntryPoints = function() {
  var templates = {};
  var files = glob.sync("templates/**/template.js", {})

  _.each(files, function(file){
    var templateName = file.match(/\/(.*?)\//)[1]

    var returnFunction = function(data, options) {
      return rawStream(require("./" + file).call(data, options));
    };

    templates[templateName] = returnFunction;
  });

  return templates;
};

// ****************************************************************************
// rawStream():
//   This implements the logic to actually write the data to the socket. If you
//   need to pass raw data to the browser, this function is for. It is a thin
//   wrapper around a simple websocket.
// ****************************************************************************

var rawStream = function(data) {
  io.on("connection", function (socket) {
    socket.emit("news", data);
  });

  io.sockets.emit("news", data);
};

// ****************************************************************************
// BrowserStream():
//   BrowserStream is a stream which implements the Node.js writable stream API.
//   This means you can pipe data to it, etc.
//
//   More info: http://nodejs.org/api/stream.html#stream_class_stream_writable
// ****************************************************************************

BrowserStream._write = function(chunk, enc, next) {
  log(chunk.chunk.toString(enc || 'utf8'));
  next();
};

module.exports = _.merge(
  setupTemplateEntryPoints(),
  { rawStream: rawStream, BrowserStream: BrowserStream }
);
