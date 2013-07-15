module.exports = function(app) {

    var request = require('request'),
        data = require('./data/data');

    app.post('/api/login', login);
    app.post('/api/signup', signup);
    app.post('/api/subscribe', subscribe);

    app.get('/api/projects', listProjects);
    app.get('/api/project/:id', getProject);
    app.post('/api/project/', createProject);
    app.put('/api/project/', updateProject);
    app.delete('/api/project/', deleteProject);


    function subscribe(req, res) {

        console.log(req.param.email);

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

    function signup(req, res) {

        var signupModel = req.param('signup');

        data.doAccountExist(signupModel.email, function(err, result) {
            console.log('err:', err);
            console.log('result:', result);

            if (result) {
                console.log('exists');
                res.statusCode = 409;
                res.send('Email already registered')
            } else {
                console.log('creating');
                data.createAccount(signupModel, function(err, result) {
                    console.log('done creating');
                    console.log('err:', err);
                    console.log('result:', result);
                    res.send('ok');
                });
            }
        });
    }

    function login(req, res) {
        var loginModel = req.param('login');

        if (data.isLoginValid(loginModel)) {
            res.statusCode = 123;
            return res.send('Account is invalid');
        } else {
            // whatever
        }
    }

    function listProjects() {}
    function getProject() {}
    function createProject() {}
    function updateProject() {}
    function deleteProject() {}
};