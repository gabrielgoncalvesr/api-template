const { cryptPassword } = require('../../../utils/encryption');

const { getUser, createUser } = require('../../repository/user');
const { validateCPF } = require('../../../utils/functions');

const createNewUser = async (request, response) => {
    const { cpf, name, email, password, telephoneNumber } = request.body;

    let user = await getUser({ email });
    if (user != null) {
        return response.status(400).json({ message: 'already exist user with this email' });
    }

    user = await getUser({ cpf });
    if (user != null) {
        return response.status(400).json({ message: 'already exist user with this cpf' });
    }

    user = await getUser({ telephoneNumber });
    if (user != null) {
        return response.status(400).json({ message: 'already exist user with this telephoneNumber' });
    }

    const validCPF = validateCPF(cpf);
    if (!validCPF) {
        return response.status(400).json({ message: 'invalid CPF' });
    }

    await cryptPassword(password, async (hash) => {
        await createUser({
            cpf,
            name,
            email,
            password: hash,
            telephoneNumber,
        });

        return response.status(200).json({ message: 'user created with sucess' });
    });
}

module.exports = {
    createNewUser
};