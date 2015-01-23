var domout = require('../../index.js');
var Writable = require('stream').Writable;
var _ = require('lodash');

var BrowserStream = Writable();

Buffer.prototype.toHTML = function() {
  var bytesMapping = {
    '10' : "<br/>"
  };

  var raw = this.toJSON().data;

  var sanitizedBytes = _.map(raw, function(n) {
    if (bytesMapping[n.toString()])
      return bytesMapping[n.toString()];

    return String.fromCharCode(n);
  });

  return sanitizedBytes.join("");
};

BrowserStream._write = function(chunk, enc, next) {
  domout.log(chunk.toHTML());
  next();
};

process.stdin.pipe(BrowserStream);
process.stdin.pipe(process.stdout);
