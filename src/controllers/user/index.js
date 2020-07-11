const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

const { createNewUser } = require('../../services/user')

router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        cpf: Joi.string().required(),
        name: Joi.string().required(),
        telephoneNumber: Joi.string().required().regex(/[0-9]{2}9[0-9]{8}/),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
    })
}), createNewUser);

module.exports.router = router;