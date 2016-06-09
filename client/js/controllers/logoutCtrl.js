fortinsApp.controller('logoutCtrl',
['$scope', '$location', 'AuthService',
function ($scope, $location, AuthService) {

  $scope.logout = function () {
    AuthService.logout()
      .then(function () {
        $location.path('/');
      });
  };
}]);
