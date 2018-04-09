// @ Calvin Lee

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/health', function(req, res, next) {
    res.status(200).json({success: 'pong!'});
});

module.exports = app;
