app.controller('SearchBoxController', function($rootScope, $scope, debug) {
  var log = debug('app:searchBox');

  $scope.$watch('query', function() {
    $scope.inputQuery = $scope.query;
  });

  $scope.onSubmit = function() {
    log('submit', $scope.inputQuery);
    $scope.updateQuery($scope.inputQuery);
  };
});
