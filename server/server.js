var express = require('express'),
    server = module.exports = express();

require('./env')(server, express);
require('./api')(server);

server.listen(process.env.PORT || 1337);