const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const router = express.Router();

const { authenticate, changePassword } = require('../../services/login')

router.post('/authenticate', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
}), authenticate);

router.put('/changePassword', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        newPassword: Joi.string().required()
    })
}), changePassword);

module.exports.router = router;