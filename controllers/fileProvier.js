var fs = require('fs');

var controller = {
	name: 'fileProvier'
};


controller.getJson = function(req, res) {
	var html = req.body.html;

	res.header('content-type', 'application/json; charset=utf-8');

	fs.readFile('public/services.json', function(err, content) {
		var data = JSON.parse(content);	

		console.log(data.items.length);
		var obj = {};
		data.items.forEach(function(item) {
			var pers = (obj[item.full_name] = (obj[item.full_name] || {fullName: item.full_name}) );
			pers[item.status_name] = pers[item.status_name] ? pers[item.status_name] + 1 : 1;
		});
 
		res.json(obj);
	});

};

controller.index = function(req, res) {
	var html = req.body.html;
	var stream = fs.createReadStream('public/index.html');
	res.header('content-type', 'text/html; charset=utf-8');
	stream.pipe(res);	
};


controller.getPublic = function(req, res) {
	var html = req.body.html;
	
	var path = req.url.split('/')[2];

	console.log(path);

	var stream = fs.createReadStream('public/'+path);
	res.header('content-type', 'text/javascript; charset=utf-8');
	stream.pipe(res);
};



module.exports = controller;

