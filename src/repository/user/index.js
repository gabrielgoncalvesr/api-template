const Sequelize = require('sequelize');

const { User } = require('../../../database/models');

const getUser = async ({ cpf, email, telephoneNumber }) => {
    if (!cpf && !email && !telephoneNumber) {
        return null;
    }

    const where = {};
    if (cpf) {
        where['cpf'] = cpf;
    }
    if (email) {
        where['email'] = email;
    }
    if (telephoneNumber) {
        where['telephoneNumber'] = telephoneNumber;
    }

    return await User.findOne({
        where,
        raw: true,
    }).then(result => {
        return result;
    });
}

const updateUser = async (user) => {
    return await User.update(
        { ...user },
        { where: { email: user.email } }
    ).then(result => {
        return true;
    }).error(err => {
        return false;
    });
}

const createUser = async ({ cpf, name, email, password, telephoneNumber }) => {
    return await User.create({
        cpf,
        name,
        email,
        password,
        telephoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
}

module.exports = {
    getUser,
    updateUser,
    createUser,
}