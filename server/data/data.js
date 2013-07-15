var mongoose = require('mongoose'),
    models = require('./models');

//mongoose.connect('mongodb://localhost/logarithmic');
mongoose.connect('mongodb://admin:smasher@widmore.mongohq.com:10000/logarithmic');

mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .on('open', console.error.bind(console, 'db opened'));

module.exports.doAccountExist = function(email, callback) {
    console.log('looking for: ', email);
    models.Account.findOne({ email: email }).exec(callback);
}

module.exports.createAccount = function(model, callback) {
    console.log('creating account: ', model);
    var newAccount = new models.Account(model);
    newAccount.save(callback);
};

module.exports.isLoginValid = function(model) {
    return models.Account.find(model);
};