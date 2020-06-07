module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'gabriel@gmail.com',
                name: 'Gabriel Reis',
                telephoneNumber: 11900000000,
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: 'igor@gmail.com',
                name: 'Igor Melo',
                telephoneNumber: 11900000001,
                password: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};