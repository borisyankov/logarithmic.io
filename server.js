var app = require('./app').init(1337);

var locals = {
    title: 'logarithmic.io',
    description: 'Logging all frontend stuff',
    author: 'Boris Yankov',
    _layoutFile: true
};

app.get('/', function(req, res) {
    locals.date = new Date().toLocaleDateString();
    res.render('home.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res) {
    res.render('404.ejs', locals);
});