module.exports = function(app) {

  app.factory('utils', function() {
    return {
      each: function(arr, cb) {
        for (var i = 0, c = arr.length; i < c; i++) {
          var item = arr[i];
          cb(item, i);
        }
      }
    };
  });
};
