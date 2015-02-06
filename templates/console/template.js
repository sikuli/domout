"use strict";

var Writable = require("stream").Writable;
var stream = require("../../lib/stream");
var BrowserStream = new Writable();
var _ = require("lodash");
var path = require("path");

Buffer.prototype.toHTML = function() {
  var bytesMapping = {
    "10": "<br/>"
  };

  var raw = this.toJSON().data;

  var sanitizedBytes = _.map(raw, function(n) {
    if (bytesMapping[n.toString()]) {
      return bytesMapping[n.toString()];
    }

    return String.fromCharCode(n);
  });

  return sanitizedBytes.join("");
};

// ****************************************************************************
// BrowserStream(chunk, enc, next):
//   BrowserStream is a stream which implements the Node.js writable stream API.
//   This means you can pipe data to it, etc.
//
//   More info: http://nodejs.org/api/stream.html#stream_class_stream_writable
// ****************************************************************************

BrowserStream._write = function(chunk, enc, next) {
  var templ = path.join(__dirname, "index.html");
  stream.rawStream(chunk.toString("utf8"), templ);
  next();
};


module.exports = BrowserStream;
