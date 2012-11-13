(function(exports) {
  
  var round = function(num) {
    return Math.round(num*100)/100;
  };

  var week = 1000 * 60 * 60 * 24 * 7;

  var calculateScore = function(repo, index) {

    //TODO: factor in github result index

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

    repo.score = {
      commit: round(commitScore),
      star: round(starScore),
      fork: round(forkScore)
    };
    repo.githubRank = index + 1;
    repo.scoreValue = Math.round(commitScore + starScore + forkScore);
  };

  window.calculateScores = function(arr) {
    _.each(arr, calculateScore);
  };
})(window);
