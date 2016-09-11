var fs = require('fs');
var logger = require('../util/logger');

var init = function(appScope) {

	//init logger
	appScope.logger = logger;

	//create controllers
	var controllersBaseDir = './controllers';
	var controllers = {};
	var controllerFiles = fs.readdirSync(controllersBaseDir);
	controllerFiles.forEach(function (file) {
		var controller = require('.' + controllersBaseDir + '/' + file);
		console.log(JSON.stringify(controller));
		controllers[controller.name] = controller;
	});
	appScope.controllers = controllers;
		

	//setup routes
	var router = require('./router');
	router.init(appScope);

};

module.exports.init = init; 
