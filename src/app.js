const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");

const routes = require('./routes');
const errorHandler = require('../utils/errorHandle');
const JWT = require('./services/authentication/middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/documentation', express.static(path.join(__dirname, '../apidoc/documentation')));

app.use(JWT());
app.use(routes);
app.use(errorHandler);

module.exports = app;