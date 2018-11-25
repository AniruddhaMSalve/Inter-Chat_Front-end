application.controller("ChatController", function($scope, $http, $cookies,
		$location, $cookieStore, $rootScope,
		chatService) {
	
	console.log('Starting Chat Controller');

	$scope.messages = [];
	$scope.message = "";
	$scope.max = 140;

	$scope.addMessage = function() {
		console.log('Adding Message Method');
		console.log($scope.User);
		chatService.send($rootScope.currentUser.loginname + ":"
				+ $scope.message);
		$scope.message = "";
	};

	chatService.receive().then(null, null, function(message) {
		console.log('Receive Method');
		console.log($scope.User);
		$scope.messages.push(message);
	});
});