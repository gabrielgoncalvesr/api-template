const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const router = express.Router();

const {
    authenticate,
    changePassword,
    passwordResetRequest,
    passwordResetConfirm,
} = require('../../services/login')

router.post('/authenticate', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).error(new Error('email must be valid')),
        password: Joi.string().required().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).error(new Error('password must be valid')),
    })
}), authenticate);

router.put('/changePassword', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().required().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).error(new Error('email must be valid')),
        password: Joi.string().required().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).error(new Error('password must be valid')),
        newPassword: Joi.string().required().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).error(new Error('password must be valid')),
    })
}), changePassword);

router.post('/passwordResetRequest', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().required().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).error(new Error('email must be valid')),
    })
}), passwordResetRequest);

router.put('/passwordResetConfirm', celebrate({
    [Segments.BODY]: Joi.object().keys({
        token: Joi.string().required(),
        newPassword: Joi.string().required().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).error(new Error('password must be valid')),
    })
}), passwordResetConfirm);

module.exports.router = router;