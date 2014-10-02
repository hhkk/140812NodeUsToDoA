'use strict';

// Configuring the Articles module
console.log ("hbkk in rawrecords.client.config.js.1");
angular.module('rawrecords').run(['Menus',
	function(Menus) {
        console.log ("hbkk in rawrecords.client.config.js.2");
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Rawrecordsx', 'rawrecords', 'dropdown', '/rawrecords(/create)?');
		Menus.addSubMenuItem('topbar', 'rawrecords', 'List Rawrecords', 'rawrecords');
		Menus.addSubMenuItem('topbar', 'rawrecords', 'New Rawrecord', 'rawrecords/create');
	}
]);