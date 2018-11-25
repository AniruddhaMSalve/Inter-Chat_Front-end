application.controller("BlogCommentController",function($scope,$rootScope,$location,$http,$route)
	{
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
	
	$scope.blogComment = {
			'commentId' : 0,
			'commentText' : '',
			'blogId' : 0,
			'commentDate' : '',
			'loginName' : '',
		};
	
	$scope.blogcommentdata;
	$scope.blogdata;
	
	function listBlogComment() {
		console.log('List Blog Comment Accessed')
		console.log($rootScope.blogId);
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showAllBlogComment/'+$rootScope.blogId)
				.then(function(response) {
					$scope.blogcommentdata=response.data;
					console.log($scope.blogcommentdata);
				});
	}
	
	function getABlog() {
		console.log('List ABlog Accessed')
		console.log($rootScope.blogId);
		$http.get('http://localhost:8081/Inter_Chat_Middleware/getBlog/'+$rootScope.blogId)
				.then(function(response) {
					$scope.blogdata = response.data;
					console.log($scope.blogdata);
				});
	}
	
	$scope.addComment=function()
	{
		$scope.blogComment.loginName=$rootScope.currentUser.loginName;
		$scope.blogComment.blogId=$rootScope.blogId;
		console.log("Adding comment");
		console.log($scope.blogComment);
		alert("Comment Added");
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addBlogComment/',$scope.blogComment)
		.then(function(response)
		{
			console.log("Success in adding comment");
		});
	}
	
	$scope.delete = function(commentId) {
		alert("Comment Deleted");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteBlogComment/'
						+ commentId).then(function(response) {
							console.log('Blog Comment Deleted')
							location.path("/BlogComment");
							listBlogComment();
		});
	}
	
	listBlogComment();
	getABlog();
});