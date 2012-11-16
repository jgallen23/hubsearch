
module.exports = function(app) {

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:query', {
        controller: 'SearchResultsController',
        templateUrl: 'searchResults.html'
      })
      .otherwise({ redirectTo: '' });
  });

};
