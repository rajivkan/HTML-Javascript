var angularApp = angular.module("appName", ["ngRoute", "appControllers1", "appControllers2", "appDirectives1"]);

angularApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/login.html',
                controller: 'loginViewCtrl'
            })
            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about1', {
                templateUrl: 'template/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact1', {
                templateUrl: 'template/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/student', {
                templateUrl: 'template/studentlist.html',
                controller: 'studentViewCtrl'
            })

           }
    ]);