angular.module('drinkL.services', [])
  .factory('Results', function ($http) {
    var getResults = function (searchCity) {
      return $http ({
        method: 'GET',
        url: 'http://localhost:3000/api/' + searchCity,
      }).then(function(resp){
        return resp.data.data
      })
    };
    return {
      'getResults': getResults
    };
  });
