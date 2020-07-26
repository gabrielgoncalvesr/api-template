const request = require('supertest');

const app = require('../../../src/app');
const models = require('../../../database/models');
const { User } = require('../../../database/models');

describe('User Tests', () => {

    let token = null;

    beforeAll(async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                email: 'test@test.com',
                password: "123456",
            });

        token = response.body.token;
    });

    afterAll(async () => {
        await models.sequelize.close();
    });

    it('should be return a exception of missing name', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: "test",
            cpf: "04931124054",
            password: "123456",
            email: "gabriel@gmail.com",
            telephoneNumber: "11900001111"
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"name\" must be valid");
    });

    it('should be return a exception of teleponeNumber validation', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: 'test test',
            cpf: '04931124054',
            password: 'Aa1234567@',
            email: 'testUser@gmail.com',
            telephoneNumber: '11900001'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('\"telephoneNumber\" must be valid');
    });

    it('should be return a exception of password validation', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: 'test test',
            cpf: '04931124054',
            password: 'Aa1234567',
            email: 'testUser@gmail.com',
            telephoneNumber: '11900001111'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('\"password\" must be valid');
    });

    it('should be return a exception of email validation', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            cpf: '04931124054',
            name: 'test test',
            password: 'Aa1234567@',
            email: 'testUsergmail.test',
            telephoneNumber: '11900001111'
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('\"email\" must be valid');
    });

    it('should be return a exception of email already used', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            cpf: '04931124054',
            name: 'test test',
            password: 'Aa1234567@',
            email: 'test@test.com',
            telephoneNumber: '11900001111'
        });

        expect(response.status).toBe(409);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('already exist user with this email');
    });

    it('should be return a exception of cpf already used', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: 'test test',
            cpf: '63484823755',
            password: 'Aa1234567@',
            email: 'test3@test.com',
            telephoneNumber: '11900002020'
        });

        expect(response.status).toBe(409);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('already exist user with this cpf');
    });

    it('should be return a exception of telephoneNumber already used', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: 'test test',
            cpf: '83436425036',
            password: 'Aa1234567@',
            email: 'test3@test.com',
            telephoneNumber: '11900000000'
        });

        expect(response.status).toBe(409);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('already exist user with this telephoneNumber');
    });

    it('should be return a exception of cpf validation', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            cpf: '11111111111',
            name: 'test test',
            password: 'Aa1234567@',
            email: 'test3@test.com',
            telephoneNumber: '11900001111'
        });

        expect(response.status).toBe(422);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('invalid CPF');
    });

    it('should be create a user with success', async () => {
        const response = await request(app).post('/user').set('Authorization', 'Bearer ' + token).send({
            name: 'test test',
            cpf: '04931124054',
            password: 'Aa1234567@',
            email: 'test3@test.com',
            telephoneNumber: '11900001111'
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('user created with sucess');

        await User.destroy({
            where: { email: 'test3@test.com' }
        });
    });
})