app.controller('SearchBoxController', function($rootScope, $scope, debug) {
  var log = debug('app:searchBox');

  $scope.$watch('query', function() {
    $scope.inputQuery = $scope.query;
  });
  $scope.$watch('language', function() {
    $scope.inputLanguage = $scope.language;
  });

  $scope.onSubmit = function() {
    log('submit', $scope.inputLanguage, $scope.inputQuery);
    $scope.updateQuery($scope.inputLanguage, $scope.inputQuery);
  };
});
