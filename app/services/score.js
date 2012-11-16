app.factory('score', function() {

  var round = function(num) {
    return Math.round(num*100)/100;
  };

  var week = 1000 * 60 * 60 * 24 * 7;

  return function(repo, githubRank) {

    //commit time
    var now = new Date().getTime();
    var diff = now - new Date(repo.pushed_at).getTime();
    var commitScore = 100 - (diff / week);
    if (commitScore < 0) {
      commitScore = 0;
    }

    //stars
    var starScore = repo.watchers * 100 / 10000;

    //forks
    var forkScore = repo.forks * 100 / 1000;

    var score = {
      commit: round(commitScore),
      star: round(starScore),
      fork: round(forkScore),
      githubRank: githubRank + 1,
      value: Math.round(commitScore + starScore + forkScore)
    };
    return score;
  };

});
