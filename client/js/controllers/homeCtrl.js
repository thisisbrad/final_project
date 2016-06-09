angular.module('fortinsApp').controller('homeCtrl',
  ['$scope', '$location', '$http',
  function ($scope, $location, $http) {
    $http.get('/api/home')
    .then(function(data) {
      console.log("Data:", data);
    })
    .catch(function(err) {
      console.log(err);
    })
  }]);
