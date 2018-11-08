application.controller("UserController", function($scope, $http, $cookies,
		$location, $cookieStore, $rootScope) {
	$scope.User = {
		'loginName' : '',
		'password' : '',
		'username' : '',
		'emailId' : '',
		'address' : '',
		'mobileNo' : '',
		'role' : ''

	};
	$scope.register = function() {
		console.log("Register Accessed");
		$scope.User.role = 'ROLE_USER';
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addUserDetail',
				$scope.User).then(function(response) {
			console.log("Register Success");
			$location.path("/Login");
		});
	}

	$scope.logincheck = function() {
		console.log("Login Check Accessed");
		$http.post(
				'http://localhost:8081/Inter_Chat_Middleware/checkUserDetail',
				$scope.User).then(function(response) {
			console.log("Login Checking Success");
			$scope.User=response.data;
			$rootScope.currentUser=response.data;
			$cookieStore.put('userDetails',response.data);
			console.log($rootScope.currentUser);
			$location.path("/Blog");
		});
	}

	$scope.logout = function() {
		console.log("Logout Accessed");
		delete $rootScope.currentUser;
		$cookieStore.remove('userDetails');
		$location.path("/Login");
	}
});