
/**
 * Sends AJAX get request and retrieves returned
 * JSON object.
 */
function getJSON(url, cb) {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', url, true);
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		cb(JSON.parse(this.responseText));
	  }
	};
	xhttp.send();
}
