

var babel        = require('babel-core');
var preset2015   = require('babel-preset-es2015');
var presetstage0 = require('babel-preset-stage-0');

require("babel-polyfill");

module.exports = function (content, file, conf) {
    conf = fis.util.extend({
       presets: [
           preset2015,
           presetstage0
       ]
   }, conf);
   return babel.transform(content, conf).code;
};
