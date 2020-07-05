const Sequelize = require('sequelize');

const { User } = require('../../../database/models');

const getUser = async ({ email }) => {
    return await User.findOne({
        raw: true,
        where: {
            email
        }
    }).then(result => {
        return result;
    });
}

const updateUser = async ({ user }) => {
    return await User.update(
        { ...user },
        { where: { email: user.email } }
    ).success(result => {
        return true;
    }).error(err => {
        return false;
    });
}

module.exports = {
    getUser,
    updateUser,
}