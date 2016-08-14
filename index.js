(function() {

	'use strict';

	// use new relic if license key exists
	if (typeof process.env.NEW_RELIC_LICENSE_KEY === 'string') {
		require('newrelic');
	}

	var express		= require('express'),

		PORT				= process.env.PORT || 3000,
		REDIRECTION_URL		= process.env.REDIRECTION_URL || "https://www.google.com",
		CHAIN_REQUEST_URL	= process.env.CHAIN_REQUEST_URL === "true",

		server		= express()
	;

	// Redirect everything
	server.get('*', function(request, response) {
		var redirectTo = REDIRECTION_URL;

		if (CHAIN_REQUEST_URL) {
			redirectTo += request.url;
		}

		response.redirect(redirectTo);
	});

	// run the server and start listen to the port
	server.listen(PORT);

	// Render some console log output
	console.log('Redirection server listening on port: ' + PORT);
	console.log('Redirecting all requests to: ' + REDIRECTION_URL);
	console.log('Chaining requests url is: ' + (CHAIN_REQUEST_URL ? 'on' : 'off'));
})();