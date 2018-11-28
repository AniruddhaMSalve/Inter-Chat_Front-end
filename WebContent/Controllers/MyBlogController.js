application.controller("MyBlogController", function($scope, $http,$rootScope, $location) {
	$scope.blog = {
		'blogId' : 0,
		'blogName' : '',
		'blogDesc' : '',
		'createDate' : '',
		'loginName' : '',
		'status' : '',
		'likes' : 0,
		'dislikes' : 0
	};
	$scope.myblogdata;
	
	function listMyBlog() {
		console.log('List My Blog Accessed')
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showMyBlog/'+$rootScope.currentUser.loginName)
				.then(function(response) {
					console.log(response.data)
					$scope.myblogdata = response.data
				});
	}
	
	listMyBlog();
});