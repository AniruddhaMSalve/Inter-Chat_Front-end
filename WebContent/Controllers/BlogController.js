application.controller("BlogController", function($scope, $http, $location) {
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
	$scope.blogdata;
	function listBlog() {
		console.log('List Blog Accessed')
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showAllBlog')
				.then(function(response) {
					console.log(response.data)
					$scope.blogdata = response.data
				});
	}
	
	$scope.addBlog = function() {
		console.log('Add Blog Accessed');
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addBlog',
				$scope.blog).then(function(response) {
			$location.path("/AddBlog");
		});
	}

	$scope.approve = function(blogId) {
		console.log('Blog Approved')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/approveBlog/'
						+ blogId).then(function(response) {

		});
	}
		
	$scope.delete = function(blogId) {
		console.log('Blog Deleted')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteBlog/'
						+ blogId).then(function(response) {
		});
	}

	$scope.reject = function(blogId) {
		console.log('Blog Rejected')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/rejectBlog/'
						+ blogId).then(function(response) {

		});
	}

	$scope.incrementLikes = function(blogId) {
		console.log('Likes Incremented')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/incrementLikes/'
						+ blogId).then(function(response) {
			$location.path("/ViewBlog");
		});
	}

	$scope.incrementDislikes = function(blogId) {
		console.log('Dislikes Incremented')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/incrementDislikes/'
						+ blogId).then(function(response) {
			$location.path("/ViewBlog");
		});
	}

	listBlog()

});