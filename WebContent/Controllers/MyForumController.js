application.controller("MyForumController", function($scope,$rootScope, $http, $location) {
	$scope.forum = {
		'forumId' : 0,
		'forumName' : '',
		'forumContent' : '',
		'createDate' : '',
		'loginName' : '',
		'status' : '',
	};
	$scope.myforumdata;
	
	function listMyForum() {
		console.log('List My Forum Accessed')
		loginName=$rootScope.currentUser.loginName;
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showMyForum/'+loginName)
				.then(function(response) {
					console.log(response.data)
					$scope.myforumdata = response.data
				});
	}

		listMyForum();

});