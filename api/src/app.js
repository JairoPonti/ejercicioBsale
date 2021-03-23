const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const server = express()
const routes = require('./routes/index.js')
require('dotenv').config()

server.name = 'API';
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cors())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Content-Type', 'application/x-www-form-urlencoded',)
    if (req.methods === 'OPTIONS') return res.send('ok');
    next();
})

server.use('/', routes)

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    res.status(status).send(message);
});
module.exports = server;
