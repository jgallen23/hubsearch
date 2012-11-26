app.controller('SearchBoxController', function($rootScope, $scope, debug) {
  var log = debug('app:searchBox');

  $scope.languages = _languages;
  $scope.inputLanguage = localStorage.getItem('lang') || _languages[0];

  $scope.$watch('query', function() {
    $scope.inputQuery = $scope.query;
  });

  $scope.$watch('language', function() {
    if (!$scope.language) {
      return;
    }
    $scope.inputLanguage = $scope.language;
  });

  $scope.onSubmit = function() {
    log('submit', $scope.inputLanguage, $scope.inputQuery);
    localStorage.setItem('lang', $scope.inputLanguage);
    $scope.updateQuery($scope.inputLanguage, $scope.inputQuery);
  };
});
