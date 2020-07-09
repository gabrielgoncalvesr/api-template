const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');

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

router.get('/test', (request, response) => {
    response.json({ "teste": "teste" });
});

// router.doc('/doc', (request, response) => {
//     express.static('public')
//     response.json({ "teste": "teste" });
// });



module.exports.router = router;