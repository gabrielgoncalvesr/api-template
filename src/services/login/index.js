const JWT = require('jsonwebtoken');

const { sendEmail } = require('../../../utils/email');
const { cryptPassword, comparePassword, generateToken } = require('../../../utils/encryption');

const { getUser, updateUser } = require('../../repository/user');

const authenticate = async (request, response) => {
    const { email, password } = request.body;

    const user = await getUser({ email });
    if (!user) {
        return response.status(404).json({ message: 'user not found' });
    }

    await comparePassword(password, user.password, (valid) => {
        if (!valid) {
            return response.status(422).json({ message: 'incorrect password' });
        }

        response.json({
            name: user.name,
            email: user.email,
            token: JWT.sign({ sub: user.id }, process.env.API_SECRET_JWT)
        });
    });
}

const changePassword = async (request, response) => {
    const { email, password, newPassword } = request.body;

    const user = await getUser({ email });
    if (!user) {
        return response.status(404).json({ message: 'user not found' });
    }

    const validPassword = await comparePassword(password, user.password, (valid) => {
        return valid;
    });

    if (!validPassword) {
        return response.status(422).json({ message: 'incorrect password' });
    }

    await cryptPassword(newPassword, (hash) => {
        user.password = hash;
        updateUser(user);

        response.json({ message: 'password changed with success' });
    });
}

const passwordResetRequest = async (request, response) => {
    const { email } = request.body;

    const user = await getUser({ email });
    if (!user) {
        return response.status(404).json({ message: 'user not found' });
    }

    const token = generateToken();

    user.passwordResetToken = token;
    updateUser(user);

    const subject = "Reset Password Request";
    const content = `Password request to this email. Access the url to change password ${process.env.APPLICATION_URL}/resetPassword?token=${token}`;

    const message = await sendEmail({ content, subject, to: email });
    if (message) {
        return response.json({ message: 'email sent with success' });
    } else {
        user.passwordResetToken = null;
        updateUser(user);

        return response.status(502).json({ message: 'error to send email, try again' });
    }
}

const passwordResetConfirm = async (request, response) => {
    const { token, newPassword } = request.body;

    const user = await getUser({ passwordResetToken: token });
    if (!user) {
        return response.status(401).json({ message: 'invalid token' });
    }

    await cryptPassword(newPassword, (hash) => {
        user.password = hash;
        user.passwordResetToken = null;
        updateUser(user);

        response.json({ message: 'password changed with success' });
    });
}

module.exports = {
    authenticate,
    changePassword,
    passwordResetRequest,
    passwordResetConfirm,
};