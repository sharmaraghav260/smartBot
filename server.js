/* server.js */

'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const router = express.Router();

// start server
app.listen(port, function(req, res) {
    console.log('Started Express on port: ' + port);
});
