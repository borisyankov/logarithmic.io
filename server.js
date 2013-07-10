var express = require('express'),
    server = module.exports = express();

require('./server/env')(server, express);
require('./server/data')();
require('./server/bundle')();

server.listen(process.env.PORT || 1337);