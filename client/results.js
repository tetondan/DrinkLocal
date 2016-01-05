angular.module('drinkL.results', [])
  .controller('resultsCrtl', function($scope, $location, Results){
    // $scope.names = [];
    // $scope.city = '';
    $scope.go = function ( path ) {
      $location.path( path );
      getCity();
    };
    var getResults = function (city) {
      Results.getResults(city)
        .then(function (results) {
          console.log('in results', results);
          $scope.names = results;
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    var getCity = function(){
      Results.getCityByIp()
        .then(function (results){
          $scope.city = results;
        }).then(function(){
          console.log($scope.city)
          getResults($scope.city)
        });
    };
  });
