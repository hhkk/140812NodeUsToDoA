'use strict';

/**
 * Module  hbkk dir core
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};