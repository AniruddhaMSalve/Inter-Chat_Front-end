application.controller("ChatController", function($scope, $rootScope,
		chatService) {
	console.log('Chat Controller Accessed');

	$scope.messages = [];
	$scope.message = "";
	$scope.max = 140;

	$scope.addMessage = function() {
		console.log('Add Message Accessed');
		chatService.send($rootScope.currentUser.loginname + ":"
				+ $scope.message);
		$scope.message = "";
	};

	chatService.receive().then(null, null, function(message) {
		console.log('Receive Accessed');
		$scope.messages.push(message);
	});
});