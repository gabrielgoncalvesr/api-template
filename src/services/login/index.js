const JWT = require('jsonwebtoken');

const { cryptPassword, comparePassword } = require('../../../utils/encryption');

const { getUser, updateUser } = require('../../repository/user');

// const createUser = async (request, response) => {
//     await cryptPassword("123456", (hash) => {
//         console.log("HASH: " + hash);
//     })
// }

const authenticate = async (request, response) => {
    const { email, password } = request.body;

    const user = await getUser({ email });
    if (user) {
        await comparePassword(password, user.password, (valid) => {
            if (valid) {
                response.json({
                    ...user,
                    token: JWT.sign({ sub: user.id }, process.env.API_SECRET_JWT)
                })
            } else {
                response.status(400).json({ message: 'incorrect password' });
            }
        })
    } else {
        response.status(400).json({ message: 'user not found' });
    }
}

module.exports = {
    authenticate
};