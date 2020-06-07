module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            { email: 'gabriel@gmail.com', name: 'Gabriel Reis', telephoneNumber: 11900000000, password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() },
            { email: 'igor@gmail.com', name: 'Igor Melo', telephoneNumber: 11900000001, password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
