application.controller("BlogController", function($scope, $http,$rootScope, $location) {
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
		alert("Blog Added");
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addBlog',
				$scope.blog).then(function(response) {
			$location.path("/AddBlog");
		});
	}
	
	$scope.updateBlog = function(blogId){
		console.log('Update Blog Accessed');
		console.log($scope.blogId);
		alert("Blog Updated");
		$http.put('http://localhost:8081/Inter_Chat_Middleware/updateBlog/'+ $scope.blogId, $scope.blog)
		.then(function(response){
			console.log($scope.blogId +" updated successfully");
			$location.path("/Blog"); 
		});
		
	};

	$scope.approve = function(blogId) {
		console.log('Blog Approved')
		alert("Blog Approved");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/approveBlog/'
						+ blogId).then(function(response) {
							$scope.reload;
							listBlog();
		});
	}
		
	$scope.delete = function(blogId) {
		console.log('Blog Deleted');
		alert("Blog Deleted");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteBlog/'
						+ blogId).then(function(response) {
							$scope.reload;
							listBlog();
		});
	}

	$scope.reject = function(blogId) {
		console.log('Blog Rejected');
		alert("Blog Rejected");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/rejectBlog/'
						+ blogId).then(function(response) {
							$scope.reload;
							listBlog();

		});
	}

	$scope.incrementLikes = function(blogId) {
		console.log('Likes Incremented')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/incrementLikes/'
						+ blogId).then(function(response) {
							$scope.reload;
							listBlog();
			$location.path("/ViewBlog");
		});
	}

	$scope.incrementDislikes = function(blogId) {
		console.log('Dislikes Incremented')
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/incrementDislikes/'
						+ blogId).then(function(response) {
							$scope.reload;
							listBlog();
			$location.path("/ViewBlog");
		});
	}

	$scope.update=function(blogId)
	{
		console.log("Update Accessed");
		$rootScope.blogId=blogId;
		$location.path("/UpdateBlog");
	}
	
	$scope.showComment=function(blogId)
	{
		console.log("Show Comment Accessed");
		$rootScope.blogId=blogId;
		$location.path("/BlogComment");
	}
	
	
	listBlog();
});