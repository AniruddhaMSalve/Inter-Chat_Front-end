application.controller("FriendController", function($scope, $http, $location,
		$rootScope, $cookieStore) {
	$scope.friend = {
		'friendId' : 0,
		'loginName' : '',
		'friendLoginName' : '',
		'status' : ''
	};
	$scope.friendList;
	$scope.pendingFriendList;
	$scope.suggestedFriendList;

	function showFriends() {
		console.log('Friend List Accessed');
		loginName = $rootScope.currentUser.loginName;
		console.log(loginName);
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/showFriendList/'
						+ loginName).then(function(response) {
			$scope.friendList = response.data;
			console.log($scope.friendList);
		});
	}

	function showPendingList() {
		console.log('Pending Friends Accessed');
		loginName = $rootScope.currentUser.loginName;
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/showPendingFriendRequest/'
						+ loginName).then(function(response) {
			$scope.pendingFriendList = response.data;
			console.log($scope.pendingFriendList);
		});
	}

	function showSuggestedFriendList() {
		console.log('Suggested Friends Accessed');
		loginName = $rootScope.currentUser.loginName;
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/showSuggestedFriendList/'
						+ loginName).then(function(response) {
			$scope.suggestedFriendList = response.data;
			console.log($scope.suggestedFriendList);
		});
	}

	$scope.sendFriendRequest = function(loginName1) {
		console.log("Friend Request Sending");
		$scope.friend.loginName = $rootScope.currentUser.loginName;
		$scope.friend.friendLoginName = loginName1;
		console.log(loginName1);
		$http.post(
				'http://localhost:8081/Inter_Chat_Middleware/sendFriendRequest',
				$scope.friend).then(function(response) {
			console.log("Friend Request Sent");
		});
	}

	$scope.unfriend = function(friendId) {
		console.log('Unfriend Accessed');
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteFriendRequest/'
						+ friendId).then(function(response) {
			console.log("Unfriended" + response.statusText);
			$location.path("/Friends");
		});
	}

	$scope.accept = function(friendId) {
		console.log('Accept Friend Accessed');
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/acceptFriendRequest/'
						+ friendId).then(function(response) {
			console.log("Accepted" + response.statusText);
			$location.path("/Friends");
		});
	}

	showFriends();
	showPendingList();
	showSuggestedFriendList();
});