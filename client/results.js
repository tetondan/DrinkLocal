angular.module('drinkL.results', [])
  .controller('resultsCrtl', function($scope, $location, $rootScope, Results){
    $scope.getResults = function (city) {
      $rootScope.city = city;
      Results.getResults(city)
        .then(function (results) {
          console.log('in results', results);
          $rootScope.names = results;
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    $scope.getCity = function(){
      Results.getCityByIp()
        .then(function (results){
          $rootScope.city = results;
        }).then(function(){
          console.log($rootScope.city)
          $scope.getResults($rootScope.city)
        });
    };
    $scope.go = function ( path ) {
      $location.path( path );
    };
  });
