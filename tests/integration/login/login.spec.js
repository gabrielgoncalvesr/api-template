const request = require('supertest');

const app = require('../../../src/app.js');
const models = require('../../../database/models');
const { User } = require('../../../database/models');

describe('Login Tests', () => {

    const email = 'test@test.com';
    const password = '123456';

    afterAll(async () => {
        await models.sequelize.close();
    });

    it('should be able to authenticate with login', async () => {
        const response = await request(app).post('/authenticate').send({
            email,
            password: password,
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should be return a exception of missing email', async () => {
        const response = await request(app).post('/authenticate').send({ email });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"password\" is required");
    });

    it('should be return a exception of missing password', async () => {
        const response = await request(app).post('/authenticate').send({ password });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" is required");
    });

    it('should be return a exception of wrong password', async () => {
        const response = await request(app).post('/authenticate').send({
            email,
            password: "errorPassword",
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("incorrect password");
    });

    it('should be return a exception of not found user', async () => {
        const response = await request(app).post('/authenticate').send({
            password,
            email: "error@gmail.com",
        });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("user not found");
    });
})