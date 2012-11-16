module.exports = function(app) {

  app.controller('HubSearchController', function($scope, $routeParams, $location, $log) {
    $scope.query = $routeParams.query;

    $scope.updateQuery = function(val) {
      $location.path('/'+val);
    };

    $scope.$on('$routeChangeSuccess', function(event, route, previousRoute) {
      $scope.query = route.params.query;
    });
  });
};
