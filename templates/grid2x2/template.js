rawStream = require('../../stream').rawStream;

var grid2x2 = {
    g11: function (data) {
        newData = { "1-1" : data };
        rawStream(newData);

    },

    g12: function (data) {
        newData = { "1-2" : data };
        rawStream(newData);

    },

    g21: function (data) {
        newData = { "2-1" : data };
        rawStream(newData);

    },

    g22: function (data) {
        newData = { "2-2" : data };
        rawStream(newData);
    }
}

module.exports = grid2x2;