var express = require('express'),
    server = module.exports = express();

require('./server/env')(server, express);
require('./server/api')(server);

server.listen(process.env.PORT || 1337);