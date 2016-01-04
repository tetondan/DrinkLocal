angular.module('services', [])
  .factory('Results', function($http){
    var getResults = function(searchCity){
      return $http({
        method: 'GET',
        url: 'http://api.brewerydb.com/v2/locations/?locality=' + searchCity + '&key=6310451998fe13f222f98a5ed6f61795'
      }).then(funciton(resp){
        return resp.data
      })
    }
  })