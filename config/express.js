'use strict';

var o = projRequire('/public/lib/ustodo/o'); // C:\140812NodeUsToDoA\public\modules\core\util
o.o('projRequire load done');



//var o = require('../public/modules/core/util/o');     // hbkk app 1 gets hit
var utilClass = projRequire('/public/lib/ustodo/UtilClass');     // hbkk app 1 gets hit


o.o ('express.js start');
/**
 * Module dependencies.
 */

o.o ('hbkk dir in config/express.js EXPRESS BEGINPROGRAM STARTHERE server side only in C:/140810NodeUsToDoA/config/express.js');

var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	compress = require('compression'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	helmet = require('helmet'),
	passport = require('passport'),
	mongoStore = require('connect-mongo')({
		session: session
	}),
	flash = require('connect-flash'),
	config = require('./config'),
	consolidate = require('consolidate'),
	path = require('path');

var callCountAppUse = 0;
module.exports = function(db) {
	// Initialize express app
    var app = express();     // hbkk dir app 2 not hit

    // HBKK  adds
    app.use(function(req, res, next){
        //o.o(new Date().toUTCString() + '-- hbkk app.use function %s %s', req.method, req.url);
       // o.o('-- hbkk app.use function %s %s', req.method, req.url);
        next();         // jump to next route handler
    });


	// Globbing model files
	config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath));
        o.o('hbkk in config/express.js required path:' + modelPath);
	});

	// Setting application local variables
	app.locals.title = config.app.title;
	app.locals.description = config.app.description;
	app.locals.keywords = config.app.keywords;
	app.locals.facebookAppId = config.facebook.clientID;
	app.locals.jsFiles = config.getJavaScriptAssets();
	app.locals.cssFiles = config.getCSSAssets();

	// Passing the request url to environment locals
	app.use(function(req, res, next) {  // hbkk dir route next #1
		res.locals.url = req.protocol + '://' + req.headers.host + req.url;
        // see http://expressjs.com/api.html
        o.o('======== hbkkk 3 dir app.use ' +
            ' req.method 	'+req.method + '	' +
            ' req.res.locals.url 	' + req.res.locals.url + '	' +
            ' res.locals.url 	' + res.locals.url + '	' +
            ' res.originalUrl 	' + req.originalUrl + '	' +
            ' res.subdomains 	' + req.subdomains+ '	' +
            ' req.protocol 	'+req.protocol + '	' +
            ' req.path 	'+req.path + '	' +
            ' req.hostname 	'+req.hostname + '	' +
            ' req.baseUrl 	'+req.baseUrl + '	' +
            ' req.params 	'+req.params + '	' +
            ' req.params	0	 	'+req.params[0] + '  ' +
            ' req.get(host) 	'+ req.get('host') + '	'
        );
        //o.o ('hbkk utilClass.getClass(req): ' + utilClass.getClass(req));
		next();
	});

	// Should be placed before express.static
	app.use(compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// Showing stack errors
	app.set('showStackError', true);

	// Set swig as the template engine
	app.engine('server.view.html', consolidate[config.templateEngine]);

	// Set views path and view engine
	app.set('view engine', 'server.view.html');   // hbkk dir view extension
	app.set('views', './app/views');

	// Environment dependent middleware
	if (process.env.NODE_ENV === 'development') {
		// Enable logger (morgan)
		app.use(morgan('dev'));

		// Disable views cache
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}

	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Enable jsonp
	app.enable('jsonp callback');

	// CookieParser should be above session
	app.use(cookieParser());

	// Express MongoDB session storage
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: new mongoStore({
			db: db.connection.db,
			collection: config.sessionCollection
		})
	}));

	// use passport session
	app.use(passport.initialize());
	app.use(passport.session());

	// connect flash for flash messages
	app.use(flash());

	// Use helmet to secure Express headers
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.disable('x-powered-by');

	// Setting the app router and static folder
	app.use(express.static(path.resolve('./public')));

	// Globbing routing files
	config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
		require(path.resolve(routePath))(app);
	});

	// Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
	app.use(function(err, req, res, next) {
		// If the error object doesn't exists
		if (!err) return next();

		// Log it
		console.error(err.stack);

		// Error page
		res.status(500).render('500', {
			error: err.stack
		});
	});

	// Assume 404 since no middleware responded
	app.use(function(req, res) {
		res.status(404).render('404', {
			url: req.originalUrl,
			error: 'Not Found'
		});
	});

	return app;
};

