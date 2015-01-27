domout = require('./domout')

test = {
    "left" : "123",
    "right" : "abc"
};

domout.start(function (info) { console.log(info); });
domout.log(test);