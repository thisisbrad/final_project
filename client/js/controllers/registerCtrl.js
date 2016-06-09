angular.module('fortinsApp').controller('registerCtrl',
['$scope', '$location', '$http',
  function ($scope, $location, $http) {
    $scope.register = function () {
      $scope.error = false;
      $scope.disabled = true;

      var email = $scope.email;
      var password = $scope.password;
      var first_name =  $scope.first_name;
      var last_name =  $scope.last_name;
      var gender = $scope.gender;
      var street_address = $scope.street_address;
      var postal_code = $scope.postal_code;
      var postion = $scope.postion;
      var date_created = $scope.date_created;

      $http.post('/api/register', {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        street_address: street_address,
        postal_code: postal_code,
        postion: postion
      }).then(function(response) {
        console.log(response);
      })

      $scope.email = '';
      $scope.password = '';
      $scope.first_name = '';
      $scope.last_name = '';
      $scope.gender = '';
      $scope.street_address = '';
      $scope.postal_code = '';
      $scope.postion = '';
      date_created = '';

    }
}]);
