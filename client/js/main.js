var fortinsApp = angular.module('fortinsApp', ['ngRoute']);

fortinsApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '../partials/login.html',
      controller: 'loginCtrl',
      access: {restricted: false}
    })
    .when('/register', {
      templateUrl: '../partials/register.html',
      controller: 'registerCtrl',
      access: {restricted: false}
    })
    .when('/home', {
      templateUrl: '../partials/home.html',
      //controller: 'homeCtrl'
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .otherwise('/');
}).run(function($rootScope, $http){
  $rootScope.logout = function(){
    $http.post('/logout');
  };
});
