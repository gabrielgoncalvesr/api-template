const express = require('express');
const router = express.Router();

const userRoutes = require('./controllers/user');
const loginRoutes = require('./controllers/login');

router.use('/', loginRoutes.router);
router.use('/user', userRoutes.router);

module.exports = router;