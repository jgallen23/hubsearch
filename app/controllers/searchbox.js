
module.exports = function(app) {

  app.controller('SearchBoxController', function($rootScope, $scope) {

    $scope.$watch('query', function() {
      $scope.inputQuery = $scope.query;
    });

    $scope.onSubmit = function() {
      $scope.updateQuery($scope.inputQuery);
    };
  });

};
