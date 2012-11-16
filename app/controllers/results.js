app.controller('SearchResultsController', function($scope, github, debug) {
  var log = debug('app:searchResults');

  $scope.sortKey = '-forks';
  $scope.searching = false;
  $scope.repos = [];

  $scope.$watch('query', function() {
    search($scope.query, $scope.language);
  });
  $scope.$watch('language', function() {
    search($scope.query, $scope.language);
  });

  var search = function(query, lang) {
    log('query', query);
    $scope.searching = true;
    github
      .search(query, lang)
        .then(function(response) {
          log('results', response);
          $scope.repos = response;
          $scope.searching = false;
        });
  };


});
