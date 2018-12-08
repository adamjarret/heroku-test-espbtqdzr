const createServer = require('./index');

createServer({port: process.env.PORT, token: process.env.SECRET_TOKEN});
