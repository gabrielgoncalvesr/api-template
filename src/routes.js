const express = require('express');
const router = express.Router();

const loginRoutes = require('./controllers/login')

router.use('/', loginRoutes.router);

module.exports = router;