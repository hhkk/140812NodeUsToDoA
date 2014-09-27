'use strict';

var util = require('util');     // hbkk app 1 gets hit
var fs  = require('fs');
var utilClass  = require('../utiljs/UtilClass');


/**
 * Created by henryms on 9/21/2014.
 */

var  logFileName = "/tmp/log.txt";


exports.appendFile= function(s) {
    var s2 = s + '\r\n';
    try {
        fs.appendFileSync('/tmp/utdlog.txt', s2)
    }
    catch(err) {
        console.log ('err in log file append:' + err.message);
    }


    // what is this? http://www.nodejsbbs.com/cnapi/api/fs.appendFileSync/index.html
//    fs.appendFileSync = function(path, data, options) {
//        if (!options) {
//            options = { encoding: 'utf8', mode: 438 /*=0666*/, flag: 'a' };
//        } else if (util.isString(options)) {
//            options = { encoding: options, mode: 438, flag: 'a' };
//        } else if (!util.isObject(options)) {
//            throw new TypeError('Bad arguments');
//        }
//        if (!options.flag)
//            options = util._extend({ flag: 'a' }, options);
//
//        fs.writeFileSync(path, data, options);
//    };



//    fs.writeFile(logFileName, s2, function(err) {
//        if(err) {
//            console.log(err);
//        } else {
//            util.debug("debug [" + s2 + "]");
//            console.log("logged [" + s2 + "]");
//        }
//    });


};