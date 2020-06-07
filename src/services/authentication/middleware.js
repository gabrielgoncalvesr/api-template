const expressJwt = require('express-jwt');

const middleware = () => {
    return expressJwt({ secret: process.env.SECRET_JWT }).unless({
        path: [
            '/authenticate',
        ]
    });
}

module.exports = middleware;