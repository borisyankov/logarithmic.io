module.exports = function (app, express) {

    app.configure(function() {

        app.use(express.logger());
        app.use(express.bodyParser());
        app.use(express.cookieParser());

        app.use('/lib', express.static(__dirname + '/../public/lib'));
        app.use('/js', express.static(__dirname + '/../public/js'));
        //app.use(express.static(__dirname + '/../public/'));

        app.all('/*', function(req, res) {
            res.sendfile('index.html', { root: __dirname + '/../public/' });
        });


        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });
    /*
     app.configure('development', function() {
     app.use(express.errorHandler({
     dumpExceptions: true,
     showStack: true
     }));
     });

     app.configure('production', function() {
     app.use(express.errorHandler());
     });*/
};