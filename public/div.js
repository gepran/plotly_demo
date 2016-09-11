
/**
 * Creates div element with passed attributes and
 * appends it to body of document.
 */
function createDiv(attribs) {
	var div = document.createElement('div');
	for (var prop in attribs) {
		div.setAttribute(prop, attribs[prop]);	
	}
	document.body.appendChild(div);
	return div;
}
