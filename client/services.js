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
  //url: 'http://api.brewerydb.com/v2/locations/?locality=' + searchCity + '&key=6310451998fe13f222f98a5ed6f61795'
