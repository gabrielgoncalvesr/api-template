const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");

const { trimmer } = require('../utils/functions');
const { expressLogger } = require('../utils/log');
const errorHandler = require('../utils/errorHandle');

const routes = require('./routes');
const JWT = require('./services/authentication/middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(trimmer);
app.use(expressLogger);

app.use('/documentation', express.static(path.join(__dirname, '../apidoc/documentation')));

app.use(JWT());
app.use(routes);
app.use(errorHandler);

module.exports = app;