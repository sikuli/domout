"use strict";

var domout = require("../index.js");


// Pipe stdin to the browser
process.stdin.pipe(domout.console);
process.stdin.pipe(process.stdout);
