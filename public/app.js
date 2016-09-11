
/* Draw basic demo chart */
function drawChart1() {

	var div = createDiv({
		id: 'chart1',
		style: 'height: 400px; width: 400px;'
	});

	var data = [{
		x: ['giraffes', 'orangutans', 'monkeys'],
		y: [20, 14, 23],
		type: 'bar'
    }];

	Plotly.newPlot('chart1', data);
}

function drawChart2() {


	getJSON('services.json', function(data) {

		console.log(data);

		var x1 = [];
		var y1 = [];
		var y2 = [];
		var y3 = [];

		
		var cnt = 0;
		for (var name in data) {
			cnt++;
			if (cnt>10) {
				break;
			}
			x1.push(name);
			y1.push(data[name]['ახალი'] || 0);
			y2.push(data[name]['დასრულებული'] || 0);
			y3.push(data[name]['მიმდინარე'] || 0);
		}

		var trace1 = {
		  x: x1,
		  y: y1,
		  type: 'bar',
		  name: 'ახალი',
		  marker: {
			color: 'pink'
		  }
		};


		var trace2 = {
		  x: x1,
		  y: y2,
		  type: "bar",
		  name: 'მიმდინარე',
		  marker: {
			color: 'lightblue'
		  }
		};

		var trace3 = {
		  x: x1,
		  y: y3,
		  type: "bar",
		  name: 'დასრულებული',
		  marker: {
			color: 'red'
		  }
		};

		var div = createDiv({
			id: 'chart2',
			style: 'height: 800px; width: 100%;'
		});
		Plotly.newPlot(div, [trace1, trace2, trace3]);
	});

}


function init() {
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart4();
}

window.onload = init;
