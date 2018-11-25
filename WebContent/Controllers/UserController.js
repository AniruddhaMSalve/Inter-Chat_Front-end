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
		alert("Registering Success");
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addUserDetail',
				$scope.User).then(function(response) {
			console.log("Register Success");
			alert("You have agreed to our Terms and Services");
			$location.path("/Login");
		});
	}
	
	$scope.getUser=function() {
		console.log('Get User Accessed');
		loginName = $rootScope.currentUser.loginName;
		$http.get('http://localhost:8081/Inter_Chat_Middleware/getUserDetail/'+loginName)
				.then(function(response) {
					console.log(response.data)
					$scope.blogdata = response.data
					$location.path("/Chat");
				});
	}
	
	$scope.updateUserDetail = function(loginName) {
		console.log("Update User Accessed");
		$scope.User.role = 'ROLE_USER';
		loginName = $rootScope.currentUser.loginName;
		alert("Details Updated");
		$http.put('http://localhost:8081/Inter_Chat_Middleware/updateUserDetail/'+loginName,$scope.User
				).then(function(response) {
			console.log("Update Success");
			$location.path("/Profile");
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
		alert("Logged Out");
		$cookieStore.remove('userDetails');
		$location.path("/Login");
	}
	
});