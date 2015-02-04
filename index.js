/*global Writable*/

"use strict";
var glob = require("glob");
var _ = require("lodash");
var stream = require('./stream');


// ****************************************************************************
// setupTemplateEntryPoints():
//   Glob grabs all of the templates inside of templates/** and create an object
//   which corresponse to:
//      templateName: entryFunction
//
//   This allows a user to create an template easily. All that has to be done
//   is:
//      1. Create your index.html (which will be served to the client)
//      2. Create a template.js which defines how to parse and return data to
//         the client-side app.
//      3. Pass your new parsed data to rawStream() within your method
// ****************************************************************************

var setupTemplateEntryPoints = function() {
  var templates = {};
  var files = glob.sync("templates/**/template.js", {})

  _.each(files, function(file){
    var templateName = file.match(/\/(.*?)\//)[1];
    var newMod = require("./" + file);
    templates[templateName] = newMod;
  });

  return templates;
};

module.exports = setupTemplateEntryPoints();