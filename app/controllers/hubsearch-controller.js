module.exports = function(app) {

  require('../services/github')(app);

  app.controller('HubSearchController', ['$scope', 'github', '$rootScope', function($scope, github, $rootScope) {
    $scope.searching = false;
    $scope.repos = [];
    

    $scope.onSubmit = function() {
      $scope.searching = true;
      github
        .search($scope.query)
          .then(function(response) {
            $scope.repos = response;
            $scope.searching = false;
          });
    };
  }]);
};
