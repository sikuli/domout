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

var tryThreeColumns = function() {

	domout.threeColumns.left(tester());
	domout.threeColumns.center(tester());
	domout.threeColumns.right(tester());
	
	domout.threeColumns.left(tester());
	domout.threeColumns.center(tester());
	domout.threeColumns.right(tester());

    setTimeout(tryThreeColumns, 750);
	
};

tryThreeColumns();