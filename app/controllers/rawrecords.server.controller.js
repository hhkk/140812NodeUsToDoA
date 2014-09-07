'use strict';

//hbkk crud rawrecords controller

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors'),
    Rawrecord = mongoose.model('Rawrecord'),
    _ = require('lodash');

/**
 * Create a Rawrecord
 */
exports.create = function (req, res) {
    console.log('hbkk in exports.create C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    var rawrecord = new Rawrecord(req.body);
    rawrecord.user = req.user;
    rawrecord.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(rawrecord);
        }
    });
    console.log('hbkk created rawrecord');
};

/**
 * Show the current Rawrecord
 */
exports.read = function (req, res) {
    console.log('hbkk in exports.read C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    res.jsonp(req.rawrecord);
};

/**
 * Update a Rawrecord
 */
exports.update = function (req, res) {
    console.log('hbkk in exports.update C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    var rawrecord = req.rawrecord;

    rawrecord = _.extend(rawrecord, req.body);

    rawrecord.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(rawrecord);
        }
    });
};

/**
 * Delete an Rawrecord
 */
exports.delete = function (req, res) {
    console.log('hbkk in exports.delete C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    var rawrecord = req.rawrecord;

    rawrecord.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(rawrecord);
        }
    });
};

/**
 * List of Rawrecords
 */
exports.list = function (req, res) {
    console.log('hbkk in exports.list C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    Rawrecord.find().sort('-created').populate('user', 'displayName').exec(function (err, rawrecords) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(rawrecords);
        }
    });
};

/**
 * Rawrecord middleware
 */
exports.rawrecordByID = function (req, res, next, id) {
    console.log('hbkk in exports.rawrecordByID C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    Rawrecord.findById(id).populate('user', 'displayName').exec(function (err, rawrecord) {
        if (err) return next(err);
        if (!rawrecord) return next(new Error('Failed to load Rawrecord ' + id));
        req.rawrecord = rawrecord;
        next();
    });
};

/**
 * Rawrecord authorization middleware
 */
exports.hasAuthorization = function (req, res, next) {
    console.log('hbkk in exports.hasAuthorization C: 140812NodeUsToDoA app controllers rawrecords.server.controller.js');
    if (req.rawrecord.user.id !== req.user.id) {
        return res.status(403).send('User is not authorized');
    }
    next();
};