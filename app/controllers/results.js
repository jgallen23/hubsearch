app.controller('SearchResultsController', function($scope, github) {

  $scope.sortKey = '-forks';
  $scope.searching = false;
  $scope.repos = [];

  $scope.$watch('query', function() {
    console.log('results', $scope.query);
    search($scope.query);
  });

  var search = function(query) {
    $scope.searching = true;
    github
      .search(query)
        .then(function(response) {
          $scope.repos = response;
          $scope.searching = false;
        });
  };


});
