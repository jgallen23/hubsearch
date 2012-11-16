//TODO: update clientside to allow custom returns
require('angular');
var app = angular.module('hubSearch', []);
require('./controllers/hubsearch')(app);
require('./controllers/searchbox')(app);
require('./controllers/results')(app);
require('./services/router')(app);

//TODO: change to exports
window.app = app;





