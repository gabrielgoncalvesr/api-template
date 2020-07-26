const { cryptPassword } = require('../../../utils/encryption');

const { getUser, createUser } = require('../../repository/user');

const { debug, info } = require('../../../utils/log');
const { validateCPF } = require('../../../utils/functions');

const createNewUser = async (request, response) => {
    const { cpf, name, password, email, telephoneNumber } = request.body;

    const validCPF = validateCPF(cpf);
    if (!validCPF) {
        debug(`invalid cpf to: ${cpf}`);
        return response.status(422).json({ message: 'invalid CPF' });
    }

    let user = await getUser({ email });
    if (user != null) {
        debug(`already exist user with this email: ${email}`);
        return response.status(409).json({ message: 'already exist user with this email' });
    }

    user = await getUser({ cpf });
    if (user != null) {
        debug(`already exist user with this cpf: ${cpf}`);
        return response.status(409).json({ message: 'already exist user with this cpf' });
    }

    user = await getUser({ telephoneNumber });
    if (user != null) {
        debug(`already exist user with this telephoneNumber: ${telephoneNumber}`);
        return response.status(409).json({ message: 'already exist user with this telephoneNumber' });
    }

    await cryptPassword(password, async (hash) => {
        await createUser({
            cpf,
            name,
            password: hash,
            telephoneNumber,
            email: email.toLowerCase(),
        });

        info(`user created with sucess with email: ${email}`);
        return response.status(201).json({ message: 'user created with sucess' });
    });
}

module.exports = {
    createNewUser
};