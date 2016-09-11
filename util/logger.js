var bunyan = require('bunyan');

var logger = bunyan.createLogger({
	name: 'htmlToPdf',
	level: 'trace'

});

var loggerWrapper = {

	log: function(msg) {
		logger.log(msg);
	},

	info: function(msg) {
		logger.info(msg);
	},

	debug: function(msg) {
		logger.debug(msg);
	},

	trace: function(msg) {
		logger.trace(msg);
	}

}

module.exports = loggerWrapper;
