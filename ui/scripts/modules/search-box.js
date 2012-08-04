$.fidel('searchBox', {
  elements: {
    '[name=lang]': 'language',
    '[name=q]': 'query'
  },
  events: {
    'keyup query': 'checkKeyUp',
    'change language': 'search',
    'click button': 'search'
  },
  init: function() {
    this.els.language.typeahead({
      source: languages
    });
  },
  checkKeyUp: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      this.search();
    }
  },
  search: function() {
    var query = this.els.query.val();
    var language = this.els.language.val().toLowerCase() || 'all';

    if (!query) {
      return;
    }

    this.route('/'+language+'/'+query);
  }
});
