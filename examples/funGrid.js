"use strict";

var domout = require("../index");
var _ = require("lodash");

var sentences = [
    "Have you ever seen the darkest dream?",
    "Where do the muffins play?",
    "Can you feel the love tonight?",
    "Who let the dogs out?",
    "I've never met the divine sandwich, but I bet he's cool.",
    "We'll squat on npm names all day!",
    "If you wear chambray one more time, I swear...",
    "Get out of my namaste space, B!"
];

var tester = function() {
    return _.sample(sentences);
};

var tryGridsOut = function() {
    domout.fungrid2x2.g11(tester());
    domout.fungrid2x2.g12(tester());
    domout.fungrid2x2.g21(tester());
    domout.fungrid2x2.g22(tester());
    domout.fungrid2x2.g11(tester());
    domout.fungrid2x2.g12(tester());
    domout.fungrid2x2.g21(tester());
    domout.fungrid2x2.g22(tester());

    setTimeout(tryGridsOut, 750);
};

tryGridsOut();
