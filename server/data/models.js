module.exports = function() {

    var mongoose = require('mongoose');

    this.Account = mongoose.model('Account', mongoose.Schema({
        email: String,
        firstName: String,
        lastName: String,
        password: String
    }));

    this.Log = mongoose.model('Log', mongoose.Schema({
        timestamp: String,
        message: String
    }));
}
