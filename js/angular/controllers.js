var appCtrl = angular.module("appControllers1", []);


appCtrl.controller("studentViewCtrl", ["$scope", "$http", function($scope, $http){
	$("#navSection").show();
	$http.get("data/data.json")
	.success(function(res){
		$scope.students = res.student;
	})
	.error(function(err){
		alert("Unable to load the student data.");
	})
}]);

appCtrl.controller("contactViewCtrl", ["$scope", function($scope){
	$("#navSection").show();
}]);

appCtrl.controller("loginViewCtrl", ["$scope", function($scope){
	$("#navSection").hide();
	$scope.login = function(){
		if($("#txtUsername").val() == "admin" && $("#txtPassword").val() == "password"){
			window.location.href = "#/home";
		}
		else{
			alert("Username and Password is incorrect.")
		}
	}
}]);