
module.exports = function(app) {

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:query', {})
      .otherwise({ redirectTo: '' });
  });

  app.run(function($rootScope) {

    var lastQuery;

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
      var query = current.pathParams.query;
      $rootScope.$broadcast('routeChanged', query);
    });
  });

};
