#Share

This [oauthd](https://github.com/oauth-io/oauthd) plugin unifies sharing features for several API providers like Twitter or Facebook.

To learn more about **oauthd**, please check out [its repository on Github](https://github.com/oauth-io/oauthd).

##Requirements

This is an oauthd plugin, and thus needs oauthd to be installed to work. You also need a working oauthd instance.

##Installation

To install this plugin in an **oauthd** instance, just run the following command:

```sh
$ oauthd plugins install https://github.com/william26/oauthd-share
```

You will then be able to use this plugin in your app through oauthd's API or thanks to one of oauthd's SDKs.

##Usage with the API

Send the following request to post a message on Facebook or Twitter:

```curl
POST http://your_oauthd/auth/:provider/share
```

With the following JSON payload:

```JSON
{
    "status": "Your message"
}
```

You need to send the header 'oauthio' containing the following fields, urlencoded:

- **k**: your oauthd app public key
- **access_token**: your access token if the provider uses OAuth 2.0
- **oauth_token**: your oauth token if the provider uses OAuth 1.0
- **oauth_token_secret**: your oauth token secret if the provider uses OAuth 1.0


##Usage with the JavaScript SDK
```javascript
OAuth.popup('provider')
    .then(function (request_object) {
        return request_object.share.status('Hello world');
    })
    .then(function (api_response) {
        console.log('Success: ', api_response);
    })
    .fail(function (e) {
        console.log('Error: ', e);
    });
```


##Currently available providers
- **facebook**
- **twitter**

##Contributing

You are very welcome to contribute to this plugin. To do so, fork this repository.

You can thus add providers (as long as they are available in oauthd), and work with the plugin's features at will.

Once you're done, don't forget to create a pull request so we can review and integrate your code in this repo.

##License

This plugin is distributed under the Apache-2.0 license.
