var fortinsApp = angular.module('fortinsApp', ['ngRoute']);

fortinsApp.controller('loginCtrl',
  ['$scope', '$location',
  function ($scope, $location) {
    $scope.login = function () {
      var email = $scope.email;
      var password = $scope.password;

      console.log(email);
      console.log(password);
    };
  }]);

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
      controller: 'homeCtrl',
      access: {restricted: true}
    })
    .otherwise({
      redirectTo: '/'
    });
});
