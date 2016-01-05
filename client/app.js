angular.module('drinkL',[
  'drinkL.results',
  'drinkL.services',
  'ngRoute'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: '/results.html',
        controller: 'resultsCrtl'
      })
  });
