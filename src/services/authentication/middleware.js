const expressJwt = require('express-jwt');

const middleware = () => {
    return expressJwt({ secret: process.env.API_SECRET_JWT }).unless({
        path: [
            '/authenticate',
            '/doc',
            '/image.jpg'
        ]
    });
}

module.exports = middleware;