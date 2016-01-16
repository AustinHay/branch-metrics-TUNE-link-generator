// You can manipulate the following values to test the generator.
var testValues = {
	'your_advertiser_id' : ,
	'site_id' : ,
	'advertiser_id' : ,
	'action' : ,
	'site_event_id' : ,
	'site_event_name' : 
};

window.onload = function() {

	for (var i in testValues) {
		console.log(i);
		console.log(testValues[i]);
		window.document.getElementById(i).value = testValues[i];
	};

};