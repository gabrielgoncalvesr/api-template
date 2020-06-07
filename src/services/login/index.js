const JWT = require('jsonwebtoken');

const { getUser } = require('../../repository/user')

const authenticate = async (request, response) => {
    const { email, password } = request.body;

    const user = await getUser({ email });

    if (user) {
        const token = JWT.sign({ sub: user.id }, process.env.SECRET_JWT);

        response.json({ ...user, token })
    } else {
        response.status(400).json({ message: 'username or password is incorrect' });
    }
}

module.exports = {
    authenticate
};