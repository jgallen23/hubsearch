app.controller('SearchResultsController', function($scope, github, debug) {
  var log = debug('app:searchResults');

  $scope.sortKey = '-forks';
  $scope.searching = false;
  $scope.repos = [];

  $scope.$watch('query', function() {
    search($scope.query);
  });

  var search = function(query) {
    log('query', query);
    $scope.searching = true;
    github
      .search(query)
        .then(function(response) {
          log('results', response);
          $scope.repos = response;
          $scope.searching = false;
        });
  };


});
