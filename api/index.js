const express = require('express');
const cors = require('cors');
const server = express();
const fetch = require("node-fetch");


server.use(cors());




server.listen(3003, ()=> {
    console.log ('%s listening at 3003')
});