import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
angular.module('socially', [
	angularMeteor
])
.controller('PartiesListCtrl', function($scope) {
	'ngInject';
	
	$scope.parties = [{
		'name': 'Dubstep-Free Zone',
		'description': 'Can we please just for an evening not listen to dubstep.'
	}, {
		'name': 'All dubstep all the time',
		'description': 'Get it on!'
	}, {
		'name': 'Savage lounging',
		'description': 'Leisure suit required. And only fiercest manners.'
	}];
});

function onReady() {
	angular.bootstrap(document, ['socially']);
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}