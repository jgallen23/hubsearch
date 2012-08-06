_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};
$.fidel('app', {
  routes: {
    '': 'showHome',
    '/:lang/:query': 'showResults'
  },
  elements: {
    'form': 'search',
    '.results': 'results'
  },
  init: function() {
    //init modules
    this.els.search.searchBox();
    this.els.results.searchResults();
  },
  showHome: function() {
    console.log('home');
  },
  showResults: function(lang, query) {
    var self = this;
    githubSearch(query, lang, function(err, results) {
      console.log(results);
      calculateScores(results);
      self.els.results.searchResults('set', results);
    });
  }
});

$('body').app();
