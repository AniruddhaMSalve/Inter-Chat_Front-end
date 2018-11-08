var application=angular.module("RouteConfiguration",['ngRoute',,'ngCookies']);
application.config(function($routeProvider,$locationProvider)
{
    console.log("Route Configuration Accessed");
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/ContactUs',{templateUrl:"View-Pages/ContactUs.html"})
    .when('/AboutUs',{templateUrl:"View-Pages/AboutUs.html"})
    .when('/Blog',{templateUrl:"View-Blog/Blog.html"})
    .when('/ManageBlog',{templateUrl:"View-Blog/ManageBlog.html"})
    .when('/AddBlog',{templateUrl:"View-Blog/AddBlog.html"})
    .when('/Forum',{templateUrl:"View-Forum/Forum.html"})
    .when('/ManageForum',{templateUrl:"View-Forum/ManageForum.html"})
    .when('/AddForum',{templateUrl:"View-Forum/AddForum.html"})    
    .when('/Register',{templateUrl:"View-User/Register.html"})
    .when('/Login',{templateUrl:"View-User/Login.html"})
    .when('/Profile',{templateUrl:"View-User/Profile.html"})
    .when('/UploadPicture',{templateUrl:"View-User/UploadPicture.html"})
    ;
});

application.run(function($rootScope,$cookieStore){
    console.log("Run Accessed");
    console.log($rootScope.currentUser);
    if($rootScope.currentUser==undefined){
        console.log($cookieStore.get('userDetails'));
        $rootScope.currentUser=$cookieStore.get('userDetails');
    }
});

/*application.run(function($rootScope, $cookieStore) {
	console.log('Run Accessed');
	console.log($rootScope.currentUser);

	if ($rootScope.currentUser == undefined) {
		$rootScope.currentUser = $cookieStore.get('userDetails');
	} else {
		console.log($rootScope.currentUser.loginName);
		console.log($rootScope.currentUser.role);
	}
});*/