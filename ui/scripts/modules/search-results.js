$.fidel('searchResults', {
  template: '#tpl-results',
  templateTarget: 'tbody',
  elements: {
    'table': 'table',
    'tbody': 'results',
    '.loading': 'loading'
  },
  events: {
    'click [data-sort]': 'tableHeaderClicked'
  },
  set: function(results) {
    this.results = results;
    this.sortBy('scoreValue');
  },
  tableHeaderClicked: function(e) {
    var sort = $(e.target).data('sort');
    this.sortBy(sort);
  },
  sortBy: function(key) {

    this.find('th.selected').removeClass('selected');
    this.find('th[data-sort='+key+']').addClass('selected');


    var now = new Date().getTime();
    this.results = _.sortBy(this.results, function(item) {
      if (key == 'commit') {
        var d = new Date(item.pushed_at).getTime();
        return now - d;
      } else if (key == 'githubRank') {
        return item[key];
      } else { 
        return -item[key];
      }
    }); 
    this.update();
  },
  update: function() {
    this.els.loading.hide();
    this.els.table.show();
    this.render({ results: this.results });
    this.find('[data-timestamp]').relativeTime();
  },
  showLoading: function() {
    this.els.table.hide();
    this.els.loading.show();
  }
});
