"use strict";

var rawStream = require("../../lib/stream").rawStream;


var grid2x2 = {
    g11: function(data) {
        var newData = { "1-1": data };
        rawStream(newData);

    },

    g12: function(data) {
        var newData = { "1-2": data };
        rawStream(newData);

    },

    g21: function(data) {
        var newData = { "2-1": data };
        rawStream(newData);

    },

    g22: function(data) {
        var newData = { "2-2": data };
        rawStream(newData);
    }
};


module.exports = grid2x2;
