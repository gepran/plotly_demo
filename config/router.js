

var router = {};

var app = null;
var controllers = null;


var route = function (config) {
	var controller = controllers[config.controller];
	var fn = controller[config.fn];

	app[config.method](config.path, fn);
};

router.init = function(appScope) {
	app = appScope.app;
	controllers = appScope.controllers;

	route({
		method: 'get',
		path: '/services.json',
		controller: 'fileProvier',
		fn: 'getJson'
	});

	route({
		method: 'get',
		path: '/',
		controller: 'fileProvier',
		fn: 'index'
	});

	route({
		method: 'get',
		path: '/public/*',
		controller: 'fileProvier',
		fn: 'getPublic'
	});


};

module.exports = router;
