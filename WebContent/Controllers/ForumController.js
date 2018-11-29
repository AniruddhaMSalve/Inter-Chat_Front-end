application.controller("ForumController", function($scope,$rootScope, $http, $location) {
	$scope.forum = {
		'forumId' : 0,
		'forumName' : '',
		'forumContent' : '',
		'createDate' : '',
		'loginName' : '',
		'status' : '',
	};
	$scope.forumdata;
	
	function listForum() {
		console.log('List Forum Accessed')
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showAllForum')
				.then(function(response) {
					console.log(response.data)
					$scope.forumdata = response.data
				});
	}
	
	$scope.addForum = function() {
		console.log('Add Forum Accessed');
		alert("Forum Added");
		$scope.forum.status='NA';
		$scope.forum.loginName=$rootScope.currentUser.loginName;
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addForum',
				$scope.forum).then(function(response) {
			$location.path("/AddForum");
		});
	}

	$scope.approve = function(forumId) {
		console.log('Forum Approved')
		alert("Forum Approved");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/approveForum/'
						+ forumId).then(function(response) {

		});
	}
		
	$scope.delete = function(forumId) {
		console.log('Forum Deleted')
		alert("Forum Deleted");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteForum/'
						+ forumId).then(function(response) {
		});
	}

	$scope.reject = function(forumId) {
		console.log('Forum Rejected')
		alert("Forum Rejected");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/rejectForum/'
						+ forumId).then(function(response) {

		});
	}
	
	$scope.showComment=function(forumId)
	{
		console.log("Show Comment Accessed");
		$rootScope.forumId=forumId;
		$location.path("/ForumComment");
	}

		listForum();

});