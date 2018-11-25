application.controller("JobController", function($scope, $http,$rootScope, $location) {
	$scope.job = {
		'jobId' : 0,
		'jobDesignation' : '',
		'company' : '',
		'jobDescription' : '',
		'location' : '',
		'salary' : 0
	};
	
	$scope.applyJob={
			'applicationId':0,
			'jobId':0,
			'loginName':'',
			'appliedDate':''
	};
	
	$scope.jobdata;
	$scope.applyjobdata;
	
	function listJob() {
		console.log('List Job Accessed')
		$http.get('http://localhost:8081/Inter_Chat_Middleware/showAllJob')
				.then(function(response) {
					console.log(response.data)
					$scope.jobdata = response.data
				});
	}
	
	$scope.addJob = function() {
		console.log('Add Job Accessed');
		alert("Job Added");
		$http.post('http://localhost:8081/Inter_Chat_Middleware/addJob',
				$scope.job).then(function(response) {
			$location.path("/Job");
		});
	}
	
	$scope.delete = function(jobId) {
		console.log('Job Deleted');
		alert("Job Deleted");
		$http.get(
				'http://localhost:8081/Inter_Chat_Middleware/deleteJob/'
						+ jobId).then(function(response) {
							$scope.reload;
							listJob();
		});
	}
	
	function getJob() {
		console.log('List User Job Accessed')
		console.log($rootScope.jobId);
		$http.get('http://localhost:8081/Inter_Chat_Middleware/getJob/'+$rootScope.JobId)
				.then(function(response) {
					$scope.jobdata = response.data;
					console.log($scope.jobdata);
				});
	}
	
	$scope.apply = function(jobId) {
		console.log('Job Applied');
		console.log($scope.applyjobdata);
		alert("Applied for selected job");
		$http.post(
				'http://localhost:8081/Inter_Chat_Middleware/applyJob',$scope.applyjobdata
						).then(function(response) {
							$scope.reload;
							console.log($scope.applyjobdata);
							ListAppliedJob();
		});
	}
	
	function ListAppliedJob() {
		console.log('List Applied Job Accessed');
		loginName = $rootScope.currentUser.loginName;
		$http.get('http://localhost:8081/Inter_Chat_Middleware/listAppliedJobs/'+loginName)
				.then(function(response) {
					$scope.applyjobdata = response.data;
					console.log($scope.ListAppliedJob);
				});
	}
	
	listJob();
	ListAppliedJob();
});