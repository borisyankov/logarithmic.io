var express = require('express'),
    server = module.exports = express();

require('./env.js')(server, express);
require('./data')();

server.listen(process.env.PORT || 1337);