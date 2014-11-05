var qs = require('qs')

module.exports = {
	status: function (message) {
		var obj =  {
			apiUrl: '/1.1/statuses/update.json?' + qs.stringify({ 
				status: message, 
				display_coordinates:false 
			}),
			method: 'POST',
			headers: { 'User-Agent': 'Node' }
		};
		return obj
	}
}