'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');   // so http://localhost:3000/#!/ is the resoslution of http://localhost:3000/#!/hkdfdfgdfg

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			//templateUrl: 'modules/core/views/home.client.view.html'         // hbkkroot 5 first client side
            template: 'homehktemplateurlx!!!'                        // alternate
		});


        // hbkk dir core routes routing Homehk state routing routes
        // ?  http://localhost:3000/#!/homehk
        // from http://localhost:3000/homehk I see /homehk is not a valid path.
        $stateProvider.
            state('homehk', {
                url: '/hk',    // http://localhost:3000/#!/hk
                //templateUrl: 'modules/core/views/homehk.client.view.html'
                template: 'homehktemplateurlx!!!'
            });


	}
]);