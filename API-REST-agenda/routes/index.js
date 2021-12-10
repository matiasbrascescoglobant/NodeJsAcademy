const express = require('express');
const app = express();

app.use('/', require('./agendas'));

module.exports = app;