module.exports = function(app, express) {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/logarithmic');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function() {
        console.log('db opened');
    });

    var User = mongoose.model('User', mongoose.Schema({
        name: String
    }));

    var newUser = new User({ name: 'boris' });
    newUser.save(function(err) {
        if (err) console.log(err);
    });

    User.find({ name: 'boris' }, function(err) {

    });

}
