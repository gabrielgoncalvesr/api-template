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

router.post('/passwordResetRequest', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required()
    })
}), passwordResetRequest);

router.put('/passwordResetConfirm', celebrate({
    [Segments.BODY]: Joi.object().keys({
        token: Joi.string().required(),
        newPassword: Joi.string().required(),
    })
}), passwordResetConfirm);

module.exports.router = router;