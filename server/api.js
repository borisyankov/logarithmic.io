module.exports = function(app) {

    var request = require('request'),
        data = require('./data/data');

    app.post('/api/login', login);
    app.post('/api/signup', signup);
    app.post('/api/subscribe', subscribe);


    function login(req, res) {
        if (data.isLoginValid(req.model)) {
            req.statusCode = 123;
            return res.send('Account is invalid');
        } else {

        }
    }

    function signup(req, res) {
        console.log(req.email);
        return data.createAccount(model);
    }

    function subscribe(req, res) {

        res.send('ok');

        var apiUrl = 'https://us7.api.mailchimp.com/2.0/lists/subscribe',
            requestData = {
                apikey: '9f382cf81b9109ed54e7a51b5a50f0a9-us7',
                id: 'e73105fd8d',
                email: { email: req.param('email') },
                double_optin: true,
                send_welcome: true
            };

        request.post(apiUrl, { form: requestData }, function(error, response, body) {
            console.log(response.body);
        });
    }
};