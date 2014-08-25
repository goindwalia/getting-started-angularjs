(function(){
	var app = angular.module('FirstAngular', []);

	app.controller('FirstAppController', ['$scope', function($scope){
		$scope.webpages = pages;

	}]);

	app.controller("PanelController", ['$scope', function($scope){
		$scope.tab = 1;

		$scope.selectTab = function(setTab) {
			$scope.tab = setTab;
		};

		$scope.isSelected = function(checkTab) {
			return $scope.tab == checkTab;
		};
		$scope.dateTimeNow = Date.now();

	}]);

	var pages = [{
		id: 1,
		name: 'Home',
		head: 'Welcome',
		body: 'Welcome to my first Angular Project. This is homepage.'
	},
	{
		id: 2,
		name: 'About',
		head: 'About US',
		body: 'Sample about us page.'		
	},
	{
		id: 3,
		name: 'Feedback',
		head: 'Feedback',
		body: ''
	}];
})();