"use strict";

var rawStream = require("../../lib/stream").rawStream;
var path = require("path");
var template = path.join(__dirname, "/index.html");

var threeColumns = {
    left: function(data) {
        var newData = { "left": data };
        rawStream(newData, template);

    },

    center: function(data) {
        var newData = { "center": data };
        rawStream(newData, template);

    },

    right: function(data) {
        var newData = { "right": data };
        rawStream(newData, template);
    }
};


module.exports = threeColumns;