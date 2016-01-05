angular.module('drinkL',[
  'drinkL.results',
  'drinkL.services',
  'drinkL.search',
  'ngRoute'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: '/results.html',
        controller: 'resultsCrtl'
      })
      .when('/search', {
        templateUrl: '/search.html',
        controller: 'resultsCrtl'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
