var githubSearch = function(query, language, callback) {
  var params = {};
  if (language != 'all') {
    params.language = language;
  }
  $.ajax({
    //url: 'fixtures/results.json',
    url: 'https://api.github.com/legacy/repos/search/'+query,
    data: params,
    dataType: 'jsonp',
    success: function(body, res, xhr) {
      if (res == 'success') {
        callback(null, body.data.repositories);
      }
    }
  });
}
