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
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Users');
    }
};