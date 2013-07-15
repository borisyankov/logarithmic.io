var mongoose = require('mongoose');

module.exports.Account = mongoose.model('Account', mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String
}));

module.exports.Log = mongoose.model('Log', mongoose.Schema({
    timestamp: String,
    message: String
}));

module.exports.Project = mongoose.model('Project', mongoose.Schema({
    name: String
}));