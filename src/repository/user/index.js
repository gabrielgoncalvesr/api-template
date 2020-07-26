const Sequelize = require('sequelize');

const { User } = require('../../../database/models');

const getUser = async (where) => {
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
        passwordResetToken: null,
    });
}

module.exports = {
    getUser,
    updateUser,
    createUser,
}