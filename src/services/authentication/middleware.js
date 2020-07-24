const expressJwt = require('express-jwt');

const middleware = () => {
    return expressJwt({ secret: process.env.API_SECRET_JWT }).unless({
        path: [
            '/authenticate',
            '/passwordResetRequest',
            '/passwordResetConfirm',
            { url: /^\/user/, methods: ['POST'] }
        ]
    });
}

module.exports = middleware;