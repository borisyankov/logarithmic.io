module.exports = function(app, express) {
    app.configure(function() {
        app.use(express.logger());

        app.use('/api', express.static(__dirname + '/../api'));

        app.use(express.static(__dirname + '/../public'));

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