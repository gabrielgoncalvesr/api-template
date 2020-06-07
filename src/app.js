const cors = require('cors');
const express = require('express');
const bodyParser = require("body-parser");

const JWT = require('./services/authentication/middleware');
const errorHandler = require('../utils/errorHandle');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(JWT());

app.use(routes);

app.use(errorHandler);

module.exports = app;