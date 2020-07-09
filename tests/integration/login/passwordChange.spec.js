const request = require('supertest');

const app = require('../../../src/app.js');
const models = require('../../../database/models');
const { User } = require('../../../database/models');

describe('Login Tests', () => {

    let user = null;
    let token = null;

    beforeAll(async () => {
        user = await User.create({
            name: 'test',
            cpf: '54897877411',
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'test1@test.com',
            telephoneNumber: '11911111111',
            password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K',
        });

        const response = await request(app)
            .post('/authenticate')
            .send({
                email: user.email,
                password: "123456",
            });

        token = response.body.token;
    });

    afterAll(async () => {
        await User.destroy({
            where: { email: user.email }
        });

        await models.sequelize.close();
    });

    it('should be able to reset password', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            password: '123456',
            newPassword: '1234567'
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('password changed with success');

    });

    it('should be return a exception of incorrect password', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            password: 'AAAAAAAA',
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('incorrect password');
    });

    it('should be return a exception of user not found', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: 'error@gmail.com',
            password: '123456',
            newPassword: '1234567'
        });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('user not found');
    });

    it('should be return a exception of missing email', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            password: '123456',
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" is required");
    });

    it('should be return a exception of missing password', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"password\" is required");
    });

    it('should be return a exception of missing newPassword', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            password: '123456',
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"newPassword\" is required");
    });
})