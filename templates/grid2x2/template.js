"use strict";

var rawStream = require("../../lib/stream").rawStream;
var path = require("path");
var template = path.join(__dirname, "/index.html");

var grid2x2 = {
    g11: function(data) {
        var newData = { "1-1": data };
        rawStream(newData, template);

    },

    g12: function(data) {
        var newData = { "1-2": data };
        rawStream(newData, template);

    },

    g21: function(data) {
        var newData = { "2-1": data };
        rawStream(newData, template);

    },

    g22: function(data) {
        var newData = { "2-2": data };
        rawStream(newData, template);
    }
};


module.exports = grid2x2;
