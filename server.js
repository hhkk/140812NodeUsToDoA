'use strict';
/**
 * Module dependencies.
 */
// init projRequire
require('./projRequire');
// projRequire('/lib/lol');


var util = require('util');

var o = projRequire('/public/lib/ustodo/o');     // hbkk app 1 gets hit
o.o("Server.js program start");


var init = require('./config/init')(),
    config = require('./config/config'),
    mongoose = require('mongoose');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// // hbkk mongo BootstrchangeUserPasswordap db connection
var db = mongoose.connect(config.db, function(err) {
    if (err) {
        o.oErr('\x1b[31m', 'Could not connect to MongoDB!');
        o.oErr('error connecting to mongoose', err);
    }
});

projRequire('/public/lib/ustodo/o');
// Init the express application

// BEGIN: EXPERIMENT WITH MY OWN EXPORTS
var utilFile = projRequire('/public/lib/ustodo/utilFileX');     // hbkk app 1 gets hit
//var utilFile = require('./public/modules/core/util/utdv20utilfile2')("HI HK TEST REQUIRE");     // hbkk app 1 gets hit

o.o("Server.js program start");
// END: EXPERIMENT WITH MY OWN EXPORTS
// this guy says try classes


var app = require('./config/express')(db);     // hbkk app 1 gets hit

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
o.o('--------> hbkk from /server.js MEAN.JS application started on port ' + config.port);

// from http://stackoverflow.com/questions/15690706/recursively-looping-through-an-object-to-build-a-property-list
function iterate(obj, stack, recurse) {
    if (recurse > 0)
    {
        o.o ("hit > 0");
    }
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], stack + '.' + property, recurse+1);
            } else {
                o.o('hbkk iterate level [' + recurse + ':' + stack + ':' +
                    property + ':' + obj[property]);
                //$('#output').append($("<div/>").text(stack + '.' + property))
            }
        }
    }
}



var logRoutes = function() { // hbkk
// was var routes = app.routes;
    var routes = app._router.stack;
    for (var verb in routes){

        var name = 'N.A.';
        var regexp = 'N.A.';
        var path = 'N.A.';

        if(routes[verb]['name']!==undefined)     {name = routes[verb]['name'];}
        if(routes[verb]['regexp']!==undefined)   {regexp=routes[verb]['regexp'];}
        if(routes[verb]['route']!==undefined && routes[verb]['route']['path']!==undefined)
        {
            path=routes[verb]['route']['path'];
        }

        o.o ('     route #:' + verb + // hbkk dir list routes
                ', name:'+name +
                ', regexp:'+regexp +
                ', route.path:'+path
        );

        //iterate (routes[verb], '', 0);

        //    if (routes.hasOwnProperty(verb)) {
        //        routes[verb].forEach(function(route){
        //            console.log(verb + " : "+route['path']);
        //        });
        //    }
    }
}

logRoutes();


