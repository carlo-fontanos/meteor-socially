import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../collections/parties';
 
angular.module('socially', [
	angularMeteor
])
.component('partiesList', {
	/**
	 * Component makes it possible to call it anywhere using:
	 * <parties-list></parties-list>
	 */
	templateUrl: 'client/partiesList.html',
	controllerAs: 'partiesList',
	controller($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			parties() {
				return Parties.find({});
			}
		});
	}
});

function onReady() {
	angular.bootstrap(document, ['socially']);
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}