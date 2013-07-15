module.exports = function(app, express) {

    var mongoose = require('mongoose'),
        models = require('./models');

    //mongoose.connect('mongodb://localhost/logarithmic');
    mongoose.connect('mongodb://logarithmic:smasher@widmore.mongohq.com:10000/logarithmic');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function() {
        console.log('db opened');
    });

    function createAccount(model) {
        if (models.Account.find({ email: model.email })) return;

        var newAccount = new models.Account(model);

        newAccount.save(function(err) {
            if (err) console.log(err);
        });
    }

    function isLoginValid(model) {
        return models.Account.find(model);
    }
}
