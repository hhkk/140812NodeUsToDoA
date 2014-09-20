'use strict';

module.exports = function(app) {
	// Root routing
    var hktestRequire = require('../../app/controllers/hktestRequire');
    var core = require('../../app/controllers/core');
    app.route('/hktestRequire').get(hktestRequire.index);
    app.route('/').get(core.index);
};