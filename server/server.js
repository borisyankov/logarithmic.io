var express = require('express'),
    server = module.exports = express();

require('./env.js')(server, express);
require('./data')();
require('./bundle')();

server.listen(process.env.PORT || 1337);