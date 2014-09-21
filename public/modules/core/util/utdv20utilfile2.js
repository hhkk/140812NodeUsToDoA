/**
 * Created by henryms on 9/21/2014.
 */
//C:\140812NodeUsToDoA\public\modules\core\util\utdv20utilfile2.js
// BEGIN: EXPERIMENT WITH MY OWN EXPORTS
exports.answer = 42;
var count = 1;
// see http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it
exports.increment = function() {
    count++;
};
exports.getCount = function() {
    return count;
};
// END: EXPERIMENT WITH MY OWN EXPORTS

//module.exports = function(STR_HIHKTESTREQUIRE) {
//    console.log ("in module.exports = function:" + STR_HIHKTESTREQUIRE);
//}

exports.testWrite = function(cons) {
    var fs = require('fs');
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!" + cons);
        }
    });
};