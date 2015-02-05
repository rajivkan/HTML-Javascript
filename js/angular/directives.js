var appDirect = angular.module("appDirectives1", []);

appDirect.directive("member", [function(){
	return {
		restrict: "E", //"E A C"
		templateUrl: "components/login.html"
	}
}]);

appDirect.directive("login2", [function(){
	return {
		restrict: "C", //"E A C"
		template: "<div><h2>{{loginLabel}}:</h2><table style='width:500px'><tr><td>Username:</td><td><input id='txtUsername'></td></tr><tr><td>Password:</td><td><input id='txtPassword'></td></tr><tr><td></td><td><input type='submit' value='Login'></td></tr></table></div>"
	}
}]);
