const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

const { authenticate } = require('../../services/login')

router.post('/authenticate', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
}), authenticate);

router.get('/test', (request, response) => {
    response.json({ "teste": "teste" });
});

module.exports.router = router;