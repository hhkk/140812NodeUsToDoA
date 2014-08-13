'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});


        // hbkk Homehk state routing routes
        $stateProvider.
            state('homehk', {
                url: '/hk',
                templateUrl: 'modules/core/views/homehk.client.view.html'
            });


	}
]);