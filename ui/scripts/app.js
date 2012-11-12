_.templateSettings = {
  escape: /\{\{-(.+?)\}\}/g,
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
  },
  showResults: function(lang, query) {
    var self = this;
    document.title = query + ' - ' + lang + ' | HubSearch';
    self.els.search.searchBox('set', query, lang);
    self.els.results.searchResults('showLoading');
    githubSearch(query, lang, function(err, results) {
      calculateScores(results);
      self.els.results.searchResults('set', results);
    });
    _gaq.push(['_trackEvent', 'hubsearch', 'search', '']);
  }
});

$('body').app();
