module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        email: {
            unique: true,
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        telephoneNumber: {
            unique: true,
            type: DataTypes.BIGINT(11),
        },
        password: {
            type: DataTypes.STRING,
        },
    });
    return User;
}


