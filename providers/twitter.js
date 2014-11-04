var qs = require('qs')

module.exports = {
	status: function (message) {
		console.log('Sending ' + message + ' to twitter');
		return {
			apiUrl: 'https://api.twitter.com/1.1/statuses/update.json?' + qs.stringify({ 
				status: message, 
				display_coordinates:false 
			}),
			method: 'POST',
			headers: { 'User-Agent': 'Node' }
		}

	}
}