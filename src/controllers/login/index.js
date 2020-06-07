const express = require('express');
const router = express.Router();

const { authenticate } = require('../../services/login')

router.post('/authenticate', authenticate);

module.exports.router = router;