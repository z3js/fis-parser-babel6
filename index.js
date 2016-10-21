

var babel        = require('babel-core');
var presetlatest = require('babel-preset-latest');
var presetstage0 = require('babel-preset-stage-0');

module.exports = function (content, file, conf) {
    if (!content) {
        return content;
    }
    conf = fis.util.extend({
       presets: [
           presetlatest,
           presetstage0
       ],   
       plugins: [
           require("babel-polyfill")
       ]
   }, conf);
   return babel.transform(content, conf).code;
};
