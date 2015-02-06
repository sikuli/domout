"use strict";

var stream = require("../../lib/stream");
var path = require("path");


var log = function(data) {
     var template = path.join(__dirname, "/index.html");
     var newData = { "main": data };
     return stream.rawStream(newData, template);
};


module.exports = log;
