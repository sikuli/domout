domout = require('./domout')

test1 = {
    "top" : "Domout is ready!"
}
test2 = {
    "left" : "123",
    "right" : "abc"
};

// domout.start(function (info) { console.log(info); });
// console.log('inbetween');
domout.log(test1);
domout.log(test2);