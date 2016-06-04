fortinsApp.controller('registerCtrl',
['$scope', '$location', '$http',
  function ($scope, $location, $http) {
    $scope.register = function () {
      $scope.error = false;
      $scope.disabled = true;

      var email = $scope.email;
      var password = $scope.password;

      console.log(email);
      console.log(password);

      $http.post('/api/register', {
        email: email,
        password: password
      })

      // $scope.register($scope.email, $scope.password)
      //   .then(function () {
      //     $location.path('/');
      //     $scope.disabled = false;
      //     $scope.register = {};
      //     console.log('Success Man');
      //   })
      //
      //   .catch(function () {
      //     $scope.error = true;
      //     $scope.errorMessage = "Something Broke!";
      //     $scope.disabled = false;
      //     $scope.register = {};
      //     console.log('Fail Man');
      //   });
    };
}]);
