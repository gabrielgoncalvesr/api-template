const JWT = require('jsonwebtoken');

const { cryptPassword, comparePassword } = require('../../../utils/encryption');

const { getUser, updateUser } = require('../../repository/user');

const authenticate = async (request, response) => {
    const { email, password } = request.body;

    const user = await getUser(email);
    if (!user) {
        return response.status(404).json({ message: 'user not found' });
    }

    await comparePassword(password, user.password, (valid) => {
        if (!valid) {
            return response.status(400).json({ message: 'incorrect password' });
        }

        response.json({
            ...user,
            token: JWT.sign({ sub: user.id }, process.env.API_SECRET_JWT)
        });
    });
}

const changePassword = async (request, response) => {
    const { email, password, newPassword } = request.body;

    const user = await getUser(email);
    if (!user) {
        return response.status(404).json({ message: 'user not found' });
    }

    const validPassword = await comparePassword(password, user.password, (valid) => {
        return valid;
    });

    if (!validPassword) {
        return response.status(400).json({ message: 'incorrect password' });
    }

    await cryptPassword(newPassword, (hash) => {
        user.password = hash;
        updateUser(user);

        response.json({ message: 'password changed with success' });
    });
}

module.exports = {
    authenticate,
    changePassword
};