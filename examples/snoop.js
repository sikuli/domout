"use strict";

var _ = require("lodash");
var domout = require("../index");

var quotes = [
  "Get your money man, it's hard out there.",
  "Now what am I to do if you was me and I was you?",
  "I love this girl but I don't know about her / As a matter of fact, I could go without her.",
  "Through all the drama, I love my momma.",
  "You lay your hands on me, watch how fast I take your freedom.",
  "Sorry it had to end this way but uh, it is what it is.",
  "Rollin down the street, smokin indo, sippin on gin and juice / Laid back (with my mind on my money and my money on my mind).",
  "Can you feel it, nothing can save ya.",
  "When the pimp's in the crib ma drop it like it's hot.",
  "Niggaz got the misconception of us / cause we so cold at what we do."
];

var quote = function() {
  return _.sample(quotes);
};

var letEmKnow = function() {
  domout.snoop(quote());
  setTimeout(letEmKnow, 4000);
};

letEmKnow();
