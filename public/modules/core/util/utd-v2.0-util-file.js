/**
 * Created by henryms on 9/21/2014.
 */

//module.exports = function(STR_HIHKTESTREQUIRE) {
//    var count = 1;
//
//    function xx(){
//        console.let ("in xx STR_HIHKTESTREQUIRE:" + STR_HIHKTESTREQUIRE);
//    }
//}

exports.increment = function() {
    count++;
};
exports.getCount = function() {
    return count;
};



// see http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it

function testWrite()
{

    var fs = require('fs');
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
}

