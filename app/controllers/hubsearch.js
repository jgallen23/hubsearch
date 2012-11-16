app.controller('HubSearchController', function($scope, $routeParams, $location, debug) {
  var log = debug('app:hubSearch');
  $scope.query = $routeParams.query;

  $scope.updateQuery = function(val) {
    $location.path('/'+val);
  };

  $scope.$on('$routeChangeSuccess', function(event, route, previousRoute) {
    log('route changed', route);
    $scope.query = route.params.query;
  });
});
