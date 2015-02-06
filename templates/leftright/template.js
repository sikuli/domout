"use strict";

var rawStream = require("../../lib/stream").rawStream;
var path = require("path");
var template = path.join(__dirname, "/index.html");

var leftright = {
    left: function (data) {
        newData = { "left" : data }
        rawStream(newData, template);

    },

    right: function (data) {
        newData = { "right" : data }
        rawStream(newData, template);

    }

}

module.exports = leftright;