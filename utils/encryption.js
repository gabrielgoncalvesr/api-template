const bcrypt = require('bcrypt');
const crypto = require('crypto');

const cryptPassword = async (password, callback) => {
    return await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt).then(result => {
            return callback(result);
        }).catch(err => {
            return callback(false);
        });
    });
};

const comparePassword = async (password, hash, callback) => {
    return await bcrypt.compare(password, hash).then(result => {
        return callback(result);
    }).catch(err => {
        return callback(false);
    });
};

const generateToken = () => {
    return crypto.randomBytes(48).toString('base64');
}

module.exports = {
    cryptPassword,
    generateToken,
    comparePassword,
}