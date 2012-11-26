app.controller('HubSearchController', function($scope, $routeParams, $location, debug) {
  var log = debug('app:hubSearch');
  $scope.query = $routeParams.query;
  $scope.language = $routeParams.lang;

  $scope.updateQuery = function(lang, query) {
    lang = lang || 'all';
    $location.path('/'+lang+'/'+query);
  };

  $scope.$on('$routeChangeSuccess', function(event, route, previousRoute) {
    log('route changed', route);
    $scope.query = route.params.query;
    $scope.language = $routeParams.lang;
  });
});
