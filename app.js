var express=require('express');
var bodyParser=require('body-parser');
var initializer=require('./config/initializer');

var appScope = {};

var app = express();
app.use(bodyParser.json({limit: '20mb'}));

appScope.app = app;

initializer.init(appScope);

var port = 8080
app.listen(port);

appScope.logger.info('App is started at port: ' + port);
