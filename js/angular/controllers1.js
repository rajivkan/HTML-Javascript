var appCtrl2 = angular.module("appControllers2", []);

appCtrl2.controller("homeViewCtrl", ["$scope", function(scope1){
	$("#navSection").show();
	scope1.message = "Welcome to Angular";
	scope1.loginLabel = "Login Form";
}])

appCtrl2.controller("aboutViewCtrl", ["$scope", function($scope){
	$("#navSection").show();
	$scope.loginLabel = "Login";
}]);