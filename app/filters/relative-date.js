app.filter('relativeDate', function() {
  return function(timestamp) {

    var now = new Date().getTime() / 1000;
    var d = new Date(timestamp).getTime() / 1000;
    var diff = now - d;
    var v = Math.floor(diff / 86400); diff -= v * 86400;

    if (v > 0) {
      return (v == 1 ? 'Yesterday' : v + ' days ago');
    }

    v = Math.floor(diff / 3600); diff -= v * 3600;
    if (v > 0) {
      return v + ' hour' + (v > 1 ? 's' : '') + ' ago';
    }

    v = Math.floor(diff / 60); diff -= v * 60;
    if (v > 0) {
      return v + ' minute' + (v > 1 ? 's' : '') + ' ago';
    }
    return 'Just now';
  };
});
