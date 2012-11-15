//TODO: update clientside to allow custom returns
require('angular');
var app = angular.module('hubSearch', []);
require('./controllers/hubsearch-controller')(app);
require('./services/router')(app);

//TODO: change to exports
window.app = app;





