'use strict';


exports.getTimeStamp = function() {
    // "Sun Sep 21 2014 13:39:59 GMT-0400 (Eastern Daylight Time)"
    return(''+new Date());
}

exports.getTimeStampMillis = function() {
    return(''+(new Date()).getTime());
}

function make2digitsWide(s)
{
    if (s.length == 1)
       s = '0' + s;
    return s;
}

exports.getTimeStampForLogWithDate = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = make2digitsWide(''+(date.getMonth()+1));
    var day = make2digitsWide(''+date.getUTCDate());
    var hour = make2digitsWide(''+date.getHours());
    var minute = make2digitsWide(''+date.getMinutes());
    var second = make2digitsWide(''+date.getSeconds());
    var sdate = [year, month, day].join('/');
    var stime = [hour, minute, second].join(":");
    //console.log ("got ts:" + s);
    return sdate + " " + stime;
}

var callCount = 0;
exports.getTimeStampForLog = function() {
    if (callCount++ % 100 == 0)
        return exports.getTimeStampForLogWithDate();

    var date = new Date();
    var year = date.getFullYear();
    var month = make2digitsWide(''+(date.getMonth()+1));
    var day = make2digitsWide(''+date.getUTCDate());
    var hour = make2digitsWide(''+date.getHours());
    var minute = make2digitsWide(''+date.getMinutes());
    var second = make2digitsWide(''+date.getSeconds());
    var s = [hour, minute, second].join(":");
    //console.log ("got ts:" + s);
    return s;
}

