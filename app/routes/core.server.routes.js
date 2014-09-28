'use strict';

module.exports = function(app) {
	// Root routing
    var hktestRequire = projRequire('/app/controllers/hktestRequire');
    var core = projRequire('/app/controllers/core');
    app.route('/hktestRequire').get(hktestRequire.index);
    app.route('/').get(core.index);
};