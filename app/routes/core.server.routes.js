'use strict';

module.exports = function(app) {
	// Root routing
    var hktestRequire = projRequire('/app/controllers/hktestRequire');
    var core = projRequire('/app/controllers/core');  // hbkk dir core
    app.route('/hktestRequire').get(hktestRequire.index);      // hbkk dir route
    app.route('/').get(core.index);        // hbkk dir core
};