var application = angular.module("RouteConfiguration", [ 'ngRoute', ,
		'ngCookies' ]);
application.config(function($routeProvider, $locationProvider) {
	console.log("Route Configuration Accessed");
	$locationProvider.hashPrefix('');
	$routeProvider.when('/ContactUs', {
		templateUrl : "View-Pages/ContactUs.html"
	}).when('/AboutUs', {
		templateUrl : "View-Pages/AboutUs.html"
	}).when('/Blog', {
		templateUrl : "View-Blog/Blog.html"
	}).when('/ManageBlog', {
		templateUrl : "View-Blog/ManageBlog.html"
	}).when('/AddBlog', {
		templateUrl : "View-Blog/AddBlog.html"
	}).when('/BlogComment', {
		templateUrl : "View-Blog/BlogComment.html"
	}).when('/UpdateBlog', {
		templateUrl : "View-Blog/UpdateBlog.html"
	}).when('/Forum', {
		templateUrl : "View-Forum/Forum.html"
	}).when('/ManageForum', {
		templateUrl : "View-Forum/ManageForum.html"
	}).when('/AddForum', {
		templateUrl : "View-Forum/AddForum.html"
	}).when('/ForumComment', {
		templateUrl : "View-Forum/ForumComment.html"
	}).when('/Register', {
		templateUrl : "View-User/Register.html"
	}).when('/Login', {
		templateUrl : "View-User/Login.html"
	}).when('/Profile', {
		templateUrl : "View-User/Profile.html"
	}).when('/UploadPicture', {
		templateUrl : "View-User/UploadPicture.html"
	}).when('/UpdateUser', {
		templateUrl : "View-User/UpdateUser.html"
	}).when('/Friends', {
		templateUrl : "View-Friend/FriendList.html"
	}).when('/PendingFriends', {
		templateUrl : "View-Friend/FriendPending.html"
	}).when('/SuggestedFriends', {
		templateUrl : "View-Friend/FriendSuggestion.html"
	}).when('/Chat', {
		templateUrl : "View-Chat/Chat.html"
	}).when('/Job', {
		templateUrl : "View-Job/Job.html"
	}).when('/AddJob', {
		templateUrl : "View-Job/AddJob.html"
	}).when('/ApplyJob', {
		templateUrl : "View-Job/ApplyJob.html"
	}).when('/AppliedJob', {
		templateUrl : "View-Job/AppliedJob.html"
	}).when('/ManageJob', {
		templateUrl : "View-Job/ManageJob.html"
	});
});

application.run(function($rootScope, $cookieStore) {
	console.log("Run Accessed");
	console.log($rootScope.currentUser);
	if ($rootScope.currentUser == undefined) {
		console.log($cookieStore.get('userDetails'));
		$rootScope.currentUser = $cookieStore.get('userDetails');
	}
});