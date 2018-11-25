application.controller("ForumCommentController",function($scope,$rootScope,$location,$http,$route)
	{
	$scope.forum = {
			'forumId' : 0,
			'forumName' : '',
			'forumContent' : '',
			'createDate' : '',
			'loginName' : '',
			'status' : '',
		};
	
	$scope.forumComment = {
			'commentId' : 0,
			'commentText' : '',
			'forumId' : 0,
			'commentDate' : '',
			'loginName' : '',
		};
	
	$scope.forumcommentdata;
	$scope.forumdata;
	
	function listForumComment() {
		console.log('List Forum Comment Accessed')
		console.log($rootScope.forumId);
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showAllForumComment/'+$rootScope.forumId)
				.then(function(response) {
					$scope.forumcommentdata=response.data;
					console.log($scope.forumcommentdata);
				});
	}
	
	function getAForum() {
		console.log('List AForum Accessed')
		console.log($rootScope.forumId);
		$http.get('http://localhost:8081/Inter_Chat_Middleware/getForum/'+$rootScope.forumId)
				.then(function(response) {
					$scope.forumdata = response.data;
					console.log($scope.forumdata);
				});
	}
	
	$scope.addComment=function()
	{
		$scope.forumComment.loginName=$rootScope.currentUser.loginName;
		$scope.forumComment.forumId=$rootScope.forumId;
		console.log("Adding comment");
		console.log($scope.forumComment);
		alert("Comment Added");
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addForumComment/',$scope.forumComment)
		.then(function(response)
		{
			console.log("Success in adding comment");
		});
	}
	
	$scope.delete = function(commentId) {
		alert("Comment Deleted");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteForumComment/'
						+ commentId).then(function(response) {
							console.log('Forum Comment Deleted')
							location.path("/ForumComment");
							listForumComment();
		});
	}
	
	listForumComment();
	getAForum();
});