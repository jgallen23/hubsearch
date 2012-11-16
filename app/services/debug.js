app.factory('debug', function() {
  return function() {
    return debug.apply(debug, arguments);
  };
});
