fortinsApp.controller('registerCtrl',
['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {
    $scope.register = function () {
      $scope.error = false;
      $scope.disabled = true;

      AuthService.register($scope.registerForm.email, $scope.registerForm.password)
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.registerForm = {};
        })

        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something Broke!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });
    };
}]);
