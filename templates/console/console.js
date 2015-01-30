"use strict";

var domout = require("../../index.js");
var BrowserStream = domout.BrowserStream;
var _ = require("lodash");

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

process.stdin.pipe(BrowserStream);
process.stdin.pipe(process.stdout);
