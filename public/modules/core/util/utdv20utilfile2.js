/**
 * Created by henryms on 9/21/2014.
 */
//C:\140812NodeUsToDoA\public\modules\core\util\utdv20utilfile2.js
//module.exports = function(STR_HIHKTESTREQUIRE) {
//    var count = 1;
//
//    function xx(){
//        console.let ("in xx STR_HIHKTESTREQUIRE:" + STR_HIHKTESTREQUIRE);
//    }
//}

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


