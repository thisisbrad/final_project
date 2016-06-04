fortinsApp.controller('loginCtrl',
  ['$scope', '$location',
  function ($scope, $location) {
    $scope.login = function () {

      $scope.error = false;
      $scope.disabled = true;

      var email = $scope.email;
      var password = $scope.password;

      console.log(email);
      console.log(password);

    };
  }]);
