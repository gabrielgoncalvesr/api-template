module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.BIGINT,
            },
            email: {
                unique: true,
                allowNull: false,
                type: DataTypes.STRING,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            telephoneNumber: {
                unique: true,
                allowNull: false,
                type: DataTypes.BIGINT(11),
            },
            cpf: {
                unique: true,
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            passwordResetToken: {
                type: DataTypes.STRING,
            },
            createdAt: {
                timestamps: true,
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                timestamps: true,
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Users');
    }
};