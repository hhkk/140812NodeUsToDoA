'use strict';

var utilTime = require('./utilTime');
var util = require('util');
var utilFile = require('./utilFile');     // hbkk app 1 gets hit
//var o = require('./o');

util.debug ('start o ====================================');

exports.o = function (s) {

    // "Sun Sep 21 2014 13:39:59 GMT-0400 (Eastern Daylight Time)"
    var s2 = utilTime.getTimeStampForLog() + ":" + s;
    util.debug (s2);
    utilFile.appendFile(s2);
}



exports.oErr = function (s, err) {

    // "Sun Sep 21 2014 13:39:59 GMT-0400 (Eastern Daylight Time)"
    var s2 = utilTime.getTimeStampForLog() + "Oerr:" + s + err;
    o (s2);
    //util.debug (s2);
    //utilFile.appendFile(s2);
}



