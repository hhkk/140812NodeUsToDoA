'use strict';
var o = projRequire('/public/lib/ustodo/o');     // hbkk app 1 gets hit

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var rawrecords = require('../../app/controllers/rawrecords');

//    app.route('/rawrecords')
//        .all(function(req, res, next) {
//            console.log (" ---------------- you made it ck 1a1 !!!!");
//            o.o (" ---------------- you made it ck 1a2 !!!!");
//            res.send('Hello World bk');
//            o.o (" ---------------- you made it ck 1b !!!!");
//            // runs for all HTTP verbs first
//            // think of it as route specific middleware!
//        });

	// Rawrecords Routes
    app.route('/rawrecords')
        .get(rawrecords.list)
        .post(users.requiresLogin, rawrecords.create);

//    app.route('/rawrecords')  // hbkkk
//        .get(rawrecords.list)
//        .post(users.requiresLogin, rawrecords.create);
//
    // hbkk dir rawrecordscust route test

    app.route('/rawrecordscust')
        .all(function(req, res, next) {
            console.log (" ---------------- you made it hk 1a1 !!!!");
            o.o (" ---------------- you made it hk 1a2 !!!!");
            res.send('Hello World bk');
            o.o (" ---------------- you made it hk 1b !!!!");
            // runs for all HTTP verbs first
            // think of it as route specific middleware!
        })
//        .get(function(req, res, next) {
//            console.log (" ---------------- you made it hk 2 !!!!");
//            //res.json(...);
//            // res.json(...);
//        })
//        .post(function(req, res, next) {
//            // maybe add a new event...
//        })






	app.route('/rawrecords/:rawrecordId')
		.get(rawrecords.read)
		.put(users.requiresLogin, rawrecords.hasAuthorization, rawrecords.update)
		.delete(users.requiresLogin, rawrecords.hasAuthorization, rawrecords.delete);

	// Finish by binding the Rawrecord middleware

    app.param('rawrecordId', rawrecords.rawrecordByID);
};


// from http://expressjs.com/4x/api.html#app.route
//var app = express();
//
//app.route('/events')
//    .all(function(req, res, next) {
//        // runs for all HTTP verbs first
//        // think of it as route specific middleware!
//    })
//    .get(function(req, res, next) {
//        res.json(...);
//    })
//    .post(function(req, res, next) {
//        // maybe add a new event...
//    })