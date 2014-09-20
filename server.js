'use strict';
/**
 * Module dependencies.
 */
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
		console.error('\x1b[31m', 'Could not connect to MongoDB!');
		console.log(err);
	}
});

// Init the express application
var app = require('./config/express')(db);     // hbkk app 1 gets hit

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('--------> hbkk from /server.js MEAN.JS application started on port ' + config.port);

// from http://stackoverflow.com/questions/15690706/recursively-looping-through-an-object-to-build-a-property-list
function iterate(obj, stack, recurse) {
    if (recurse > 0)
    {
        console.log ("hit > 0");
    }
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], stack + '.' + property, recurse+1);
            } else {
                console.log('hbkk iterate level [' + recurse + ':' + stack + ':' +
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

        console.log ('================= route #:' + verb + // hbkk dir list routes
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


