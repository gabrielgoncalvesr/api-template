const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

const { createNewUser } = require('../../services/user')

router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        cpf: Joi.string().required().error(new Error('cpf must be valid')),
        name: Joi.string().required().regex(/[a-zA-Z]{1,} [a-zA-Z]{1,}/).error(new Error('name must be valid')),
        telephoneNumber: Joi.string().required().regex(/[0-9]{2}9[0-9]{8}/).error(new Error('telephoneNumber must be valid')),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).error(new Error('email must be valid')),
        password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).error(new Error('password must be valid')),
    })
}), createNewUser);

module.exports.router = router;