app.factory('github', ['$http', 'score', 'utils', function($http, score, utils) {
  return {
    search: function(query, language) {
      if (language) {
        language = '&language='+language;
      } else {
        language = '';
      }
      return $http
        //.get('/fixtures/results.json')
        .jsonp('https://api.github.com/legacy/repos/search/'+query+'?callback=JSON_CALLBACK'+language)
        .then(function(response) {
          var repos = response.data.data.repositories;
          utils.each(repos, function(repo, index) {
            var result = score(repo, index);
            repo.score = result.value;
            repo.githubRank = index+1;
          });
          return repos;
        });
    }
  };
}]);
