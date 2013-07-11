module.exports = function(app) {

    var request = require('request');

    app.post('/api/login', function(req, res) {
        return ProductModel.find(function(err, products) {
            if (!err) {
                return res.send(products);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/signup', function(req, res) {
        return ProductModel.find(function(err, products) {
            if (!err) {
                return res.send(products);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/subscribe', function(req, res) {

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
    });
};