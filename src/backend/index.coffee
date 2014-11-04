Path = require 'path'
request = require 'request'

module.exports = (env) ->
	root_path = Path.normalize __dirname + '/..'
	share = 
		key: 'value'


		init: () ->
			env.server.post '/auth/:provider/share', env.middlewares.request.credentialsNeeded, (req, res, next) ->
				provider = req.params.provider
				
				if not req.body.status?
					return res.send new env.utilities.check.Error 'You need to provide the \'status\' file'

				api_req = require(root_path + '/providers/facebook').status(req.body.status)
				env.plugins.request.apiRequest  api_req, provider, req.headers.oauthio, (err, options) ->
					return res.send 500, 'Error' if err
					for k,v of api_req
						options[k] = v if not options[k]?
					request options, (err, response, body) ->
						if err
							return res.send 500, 'Error'
						res.send 200, body

	share