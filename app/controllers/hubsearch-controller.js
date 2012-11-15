module.exports = function(app) {

  require('../services/github')(app);

  app.controller('HubSearchController', ['$scope', 'github', '$route', '$location', function($scope, github, $route, $location) {

    $scope.searching = false;
    $scope.repos = [];

    $scope.$on('routeChanged', function(e, query) {
      if ($scope.query != query) {
        $scope.query = query;
        search();
      }
    });

    $scope.onSubmit = function() {
      search();
    };

    var search = function() {
      $scope.searching = true;
      github
        .search($scope.query)
          .then(function(response) {
            $location.path('/'+$scope.query);
            $scope.repos = response;
            $scope.searching = false;
          });
    };
  }]);
};
