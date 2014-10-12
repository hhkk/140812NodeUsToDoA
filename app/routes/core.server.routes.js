'use strict';

module.exports = function(app) {
	// Root routing
    var core = projRequire('/app/controllers/core');  // hbkk dir core see init.js so really core.server.controller.js
    app.route('/').get(core.index); // // hbkkroot 2 hbkk dir by init.js really core.server.controller.js
};