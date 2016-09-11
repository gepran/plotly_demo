function drawChart3() {


	getJSON('services_eng.json', function(data) {


		var x1 = [];
		var y1 = [];
		var y2 = [];

		
		var cnt = 0;
		for (var name in data) {
			cnt++;
			if (cnt>10) {
				break;
			}
			x1.push(name);
			y1.push(data[name]['New'] || 0);
			y2.push(data[name]['Done'] || 0);
		}

		var trace1 = {
		  x: x1,
		  y: y1,
		  type: 'scatter',
		  name: 'New',
		  marker: {
			color: 'red'
		  }
		};


		var trace2 = {
		  x: x1,
		  y: y2,
		  type: "scatter",
		  name: 'Done',
		  marker: {
			color: 'green'
		  }
		};

		var div = createDiv({
			id: 'chart3',
			style: 'height: 800px; width: 100%;'
		});
		Plotly.newPlot(div, [trace1, trace2]);

		div.on('plotly_click', function(data){
			console.log(data);
			var str = 'Employee: ' + data.points[0].x;
			
			data.points.forEach(function(obj) {
				str += '\n ' + obj.data.name + ' : ' + obj.y;
			});

			alert(str);
		});
	});

}

function drawChart4() {


	getJSON('services_eng.json', function(data) {


		var x1 = [];
		var y1 = [];
		var y2 = [];

		
		for (var name in data) {
			x1.push(name);
			y1.push(data[name]['New'] || 0);
			y2.push(data[name]['Done'] || 0);
		}

		var trace1 = {
		  x: x1,
		  y: y1,
		  type: 'bar',
		  name: 'New',
		  marker: {
			color: 'red'
		  }
		};


		var trace2 = {
		  x: x1,
		  y: y2,
		  type: "bar",
		  name: 'Done',
		  marker: {
			color: 'green'
		  }
		};

		var div = createDiv({
			id: 'chart4',
			style: 'height: 800px; width: 100%;'
		});

		var layout = {barmode: 'stack'};
		Plotly.newPlot(div, [trace1, trace2], layout);

		div.on('plotly_click', function(data){
			console.log(data);
			var str = 'Employee: ' + data.points[0].x;
			
			data.points.forEach(function(obj) {
				str += '\n ' + obj.data.name + ' : ' + obj.y;
			});

			alert(str);
		});
	});

}
