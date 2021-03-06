module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            { email: 'test@test.com', cpf: '63484823755', name: 'User Test', telephoneNumber: 11900000000, password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() },
            { email: 'gabriel@gmail.com', cpf: '22355965846', name: 'Gabriel Reis', telephoneNumber: 11900000001, password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() },
            { email: 'igor@gmail.com', cpf: '48968895848', name: 'Igor Melo', telephoneNumber: 11900000002, password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K', createdAt: new Date(), updatedAt: new Date() }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};