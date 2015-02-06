"use strict";

var _ = require("lodash");
var glob = require("glob");
var path = require("path");


// ****************************************************************************
// setupTemplateEntryPoints():
//   Glob grabs all of the templates inside of templates/** and create an object
//   which corresponse to:
//      templateName: entryFunction
//
//   This allows a user to create an template easily. All that has to be done
//   is:
//      1. Create a folder in the ./templates dir
//      2. Include an index.html file which will be served to the browser
//      3. Create a template.js file which impements the logic for sending
//         your data to the browser.
//              - For sending data to the browser,  you will want to use
//                `domoout.rawStream(..)`
// ****************************************************************************

var setupTemplateEntryPoints = function() {
  var templates = {};
  var templatePath = path.join(global.__base, "templates", "**", "template.js");
  var files = glob.sync(templatePath, {});
  var templateName = _.compose(path.basename, path.dirname);

  _.each(files, function(file) {
    templates[templateName(file)] = require(file);
  });

  return templates;
};


module.exports = {
  setupTemplateEntryPoints: setupTemplateEntryPoints
};
