const express = require('express');
const router = express.Router();

const { authenticate } = require('../../services/login')

router.post('/authenticate', authenticate);

router.get('/test', (request, response) => {
    response.json({ "teste": "teste" });
});

module.exports.router = router;