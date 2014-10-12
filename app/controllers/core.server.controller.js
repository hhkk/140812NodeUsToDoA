'use strict';

var o = projRequire('/public/lib/ustodo/o'); // C:\140812NodeUsToDoA\public\modules\core\util
/**
 * Module  hbkk dir core
 */

exports.index = function(req, res) {
    res.render('index', // hbkkroot 3 really index.server.view.html since config\express.js  app.set('view engine', 'server.view.html');
        {
            user: req.user || null
        });
};