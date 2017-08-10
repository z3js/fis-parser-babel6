

var babel        = require('babel-core');
var presetlatest = require('babel-preset-latest');
var presetstage0 = require('babel-preset-stage-0');

module.exports = function (content, file, conf) {
    if (!content) {
        return content;
    }
    conf = Object.assign({
       presets: [
           presetlatest,
           presetstage0
       ]
   }, conf);
   return babel.transform(content, conf).code;
};
