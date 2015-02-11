"use strict";

var stream = require("../../lib/stream");
var path = require("path");
var ansi_up = require("ansi_up")

var snoop = function(data) {
     var template = path.join(__dirname, "/index.html");
     var newData = { "main": ansi_up.ansi_to_html(data) };
     return stream.rawStream(newData, template);
};


module.exports = snoop;
