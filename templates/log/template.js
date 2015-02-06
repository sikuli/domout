"use strict";

var rawStream = require("../../lib/stream").rawStream;
var path = require("path");
var ansi_up = require("ansi_up")

var log = function(data) {
     var template = path.join(__dirname, "/index.html");
     var newData = { "main": ansi_up.ansi_to_html(data) };
     return rawStream(newData, template);
};


module.exports = log;
