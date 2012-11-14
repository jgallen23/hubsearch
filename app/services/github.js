module.exports = function(app) {
  require('./score')(app);
  require('./utils')(app);

  app.factory('github', ['$http', 'score', 'utils', function($http, score, utils) {
    return {
      search: function(query, language) {
        return $http
          .jsonp('https://api.github.com/legacy/repos/search/'+query+'?callback=JSON_CALLBACK')
          .then(function(response) {
            var repos = response.data.data.repositories;
            utils.each(repos, function(repo, index) {
              repo.score = score(repo, index);
            });
            return repos;
          });
      }
    };
  }]);
};
