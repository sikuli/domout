"use strict";

var _ = require("lodash");
var domout = require("../index");


var nouns = [
	"Ian",
	"Michael",
	"the Michaels",
	"Tom Wheeler",
	"the dog kingdom",
	"pelvis"
];

var verbs = [
	"rules",
	"loves",
	"perplexes",
	"invigorates"
];

var noun = function() {
	return _.sample(nouns);
};

var verb = function() {
	return _.sample(verbs);
};

var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
};

var printIt = _.compose(domout.log, capitalize);

var letEmKnow = function() {
	var phrase = noun() + " " + verb() + " " + noun() + ".";
	printIt(phrase);
	setTimeout(letEmKnow, 1500);
};

letEmKnow();
