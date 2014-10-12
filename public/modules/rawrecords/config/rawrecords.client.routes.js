'use strict';

//Setting up route
console.log ('hbkk dir inside rawrecords.client.routes.js');
angular.module('rawrecords').config(['$stateProvider',
	function($stateProvider) {
        console.log ('hbkk dir inside rawrecords.client.routes.js INSIDE function($stateProvider');

        // Rawrecords state routing
		$stateProvider.
		state('angview-rawrecord', {
			url: '/angview-rawrecord',
			templateUrl: 'modules/rawrecords/views/angview-rawrecord.client.view.html'
		}).
//            state('listRawrecords', {
//                url: '/rawrecords', // hbkkk
//                templateUrl: 'modules/rawrecords/views/list-rawrecords.client.view.html'
//            }).
            state('listRawrecordsccc', {
                url: '/rawrecordshk', // hbkkk http://localhost:3000/#!/rawrecordshk
                templateUrl: 'modules/rawrecords/views/list-rawrecords.client.view.html'
            }).
		state('createRawrecord', {
			url: '/rawrecords/create',
			templateUrl: 'modules/rawrecords/views/create-rawrecord.client.view.html'
		}).
		state('viewRawrecord', {
			url: '/rawrecords/:rawrecordId',
			templateUrl: 'modules/rawrecords/views/view-rawrecord.client.view.html'
		}).
		state('editRawrecord', {
			url: '/rawrecords/:rawrecordId/edit',
			templateUrl: 'modules/rawrecords/views/edit-rawrecord.client.view.html'
		});
	}
]);