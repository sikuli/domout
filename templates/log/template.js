var rawStream = require('../../stream').rawStream;
var template = __dirname + '/index.html';

var log = function (data) {
     var newData = { "main" : data };
     return rawStream(newData, template);
}

module.exports = log;