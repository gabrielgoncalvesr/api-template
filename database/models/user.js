module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        telephoneNumber: {
            unique: true,
            type: DataTypes.BIGINT(11)
        },
        password: {
            type: DataTypes.STRING
        },
    });

    return User;
}