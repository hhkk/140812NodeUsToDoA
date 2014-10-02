/**
 * Created by henryms on 9/27/2014.
 */

// from http://stackoverflow.com/questions/10860244/how-to-make-the-require-in-node-js-to-be-always-relative-to-the-root-folder-of-t

var util = require('util');
var projectDir = "c:\\140812NodeUsToDoA";
//var projectDir = __dirname;
// var o = require('./public/lib/ustodo/o'); // C:\140812NodeUsToDoA\public\modules\core\util

module.exports = GLOBAL.projRequire = function(module) {
    util.debug ('%%%%% 1 projectDir ['+ projectDir + '] module [' + module + ']');
    console.log ('%%%%% 2 projectDir ['+ projectDir + '] module [' + module + ']');
    return require(projectDir + module);
}
