"use strict";

var rawStream = require("../../lib/stream").rawStream;
var path = require("path");


var log = function(data) {
     var template = path.join(__dirname, "/index.html");
     var newData = { "main": data };
     return rawStream(newData, template);
};


module.exports = log;
