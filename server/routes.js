module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Hello world !'); // /static
    });

    app.get('/app', function(req, res) {
        res.send('Hello app !'); // /client
    });

    app.get('/api', function(req, res) {
        res.send('api ftw'); // api.js
    });
};