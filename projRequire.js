/**
 * Created by henryms on 9/27/2014.
 */

// from http://stackoverflow.com/questions/10860244/how-to-make-the-require-in-node-js-to-be-always-relative-to-the-root-folder-of-t

var projectDir = "c:\\140812NodeUsToDoA";
//var projectDir = __dirname;

module.exports = GLOBAL.projRequire = function(module) {
    return require(projectDir + module);
}
