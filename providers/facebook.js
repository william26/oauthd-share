module.exports = {
	status: function (message) {
		return {
			apiUrl: '/v2.2/me/feed',
			method: 'POST',
			formData: {
				message: message
			},
			headers: { 'User-Agent': 'Node' }
		}
	}
}