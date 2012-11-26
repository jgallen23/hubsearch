app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/:lang/:query', {
      controller: 'SearchResultsController',
      templateUrl: 'searchResults.html'
    })
    .otherwise({ redirectTo: '' });
});
