const request = require('supertest');

const app = require('../../src/app');
const models = require('../../database/models');
const { User } = require('../../database/models');

describe('Login Tests', () => {

    let user = null;
    let token = null;

    beforeAll(async () => {
        user = await User.create({
            name: 'test',
            cpf: '54897877411',
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'test@test.com',
            telephoneNumber: '11900000000',
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

    it('should be able to authenticate with login', async () => {
        const response = await request(app).post('/authenticate').send({
            email: user.email,
            password: "123456",
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('email');
    });

    it('should be return a exception of missing properties in login', async () => {
        let response = await request(app).post('/authenticate').send({ email: user.email });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"password\" is required");

        response = await request(app).post('/authenticate').send({ password: "123456" });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" is required");
    });

    it('should be return a exception of wrong password in login', async () => {
        const response = await request(app).post('/authenticate').send({
            email: user.email,
            password: "1234561",
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("incorrect password");
    });

    it('should be return a exception of not found user in login', async () => {
        const response = await request(app).post('/authenticate').send({
            email: "error@gmail.com",
            password: "123456",
        });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("user not found");
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

    it('should be return a exception of incorrect password to password change', async () => {
        const response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            password: '123456',
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('incorrect password');
    });

    it('should be return a exception of missing properties in password change', async () => {
        let response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            password: '123456',
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" is required");

        response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            newPassword: '1234567'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"password\" is required");

        response = await request(app).put('/changePassword').set('Authorization', 'Bearer ' + token).send({
            email: user.email,
            password: '123456',
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"newPassword\" is required");
    });
})