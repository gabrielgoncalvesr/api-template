const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

module.exports.getUser = getUser;