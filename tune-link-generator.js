
// TUNE Dynamic Link Generator Function

function createTuneDynamicDeepLink () {
	// Takes inputs and creates a link out of them.

	// Create base link.
	var link = 'http://'

	// Grab Primary Tune Query Parameters
	var your_advertiser_id = window.document.getElementById('your_advertiser_id').value;
	var site_id = window.document.getElementById('site_id').value;
	var advertiser_id = window.document.getElementById('advertiser_id').value;
	var action = window.document.getElementById('action').value;
	var site_event_id = window.document.getElementById('site_event_id').value;
	var site_event_name = window.document.getElementById('site_event_name').value;

	// Add Your Tune Advertiser Id to the link ('your_advertiser_id')
	if (your_advertiser_id.length>0) {
		var link = link + your_advertiser_id;
	} else { window.alert('Your Tune Advertiser ID is not filled in or is incorrect.');}

	// Add Tune main string identifiers
	var link = link + '.measure.mobileapptracking.com/serve?sdk=server&response_format=json&ios_ifa={{device.hardware_id}}&google_aid={{device.metadata.google_advertising_id}}&created_at={{event.date}}&user_id={{identity}}&timestamp={{event.date}}&ios_ad_tracking_disabled=0&google_ad_tracking=1'

	// Add Tune Site Id (site_id)
	if (site_id.length>0) {
		var link = link + '&site-ID=' + site_id;
	} else { window.alert('Your Tune Site Id is not filled in or is incorrect.');}

	// Add Tune Advertiser Id (advertiser_id)
	if (advertiser_id.length>0) {
		var link = link + '&advertiser_id=' + advertiser_id;
	} else { window.alert('Your Tune Advertiser Id is not filled in or is incorrect.');}

	// Verify single Event Postback
	if (action.length>0) 

	// Add Tune Predefined Event Name (action)



	// Add Tune Site Event Id (site_event_id)



	// Add Tune Custom Event Id (site_event_name)



,IF(ISBLANK(B6),"",CONCATENATE("&site-ID=",B6)),
IF(ISBLANK(B7),"",CONCATENATE("&advertiser_id=",B7)),
IF(ISBLANK(B8),"",CONCATENATE("&action=",B8)),
IF(ISBLANK(B9),"",CONCATENATE("&action=conversion&site_event_id=",B9)),
IF(ISBLANK(B10),"",CONCATENATE("&action=conversion&site_event_name=",B10)),

	if (customQueryParams1.length > 0) {
		var link = link +'&'+ customQueryParams1;}


	// Add Custom Query Parameters

	customQueryParams1 = window.document.getElementById('customQueryParams1').value;
	customQueryParams2 = window.document.getElementById('customQueryParams2').value;
	customQueryParams3 = window.document.getElementById('customQueryParams3').value;
	customQueryParams4 = window.document.getElementById('customQueryParams4').value;
	customQueryParams5 = window.document.getElementById('customQueryParams5').value;
	customQueryParams6 = window.document.getElementById('customQueryParams6').value;
	customQueryParams7 = window.document.getElementById('customQueryParams7').value;
	customQueryParams8 = window.document.getElementById('customQueryParams8').value;
	customQueryParams9 = window.document.getElementById('customQueryParams9').value;
	customQueryParams10 = window.document.getElementById('customQueryParams10').value;

	if (customQueryParams1.length > 0) {
		var link = link +'&'+ customQueryParams1;}
	if (customQueryParams2.length > 0) {
		var link = link +'&'+ customQueryParams2;}
	if (customQueryParams3.length > 0) {
		var link = link +'&'+ customQueryParams3;}
	if (customQueryParams4.length > 0) {
		var link = link +'&'+ customQueryParams4;}
	if (customQueryParams5.length > 0) {
		var link = link +'&'+ customQueryParams5;}
	if (customQueryParams6.length > 0) {
		var link = link +'&'+ customQueryParams6;}
	if (customQueryParams7.length > 0) {
		var link = link +'&'+ customQueryParams7;}
	if (customQueryParams8.length > 0) {
		var link = link +'&'+ customQueryParams8;}
	if (customQueryParams9.length > 0) {
		var link = link +'&'+ customQueryParams9;}
	if (customQueryParams10.length > 0) {
		var link = link +'&'+ customQueryParams10;}

	// Final Link Creation
	window.document.getElementById('generatedTuneDyanmicDeepLink').value = link

};
