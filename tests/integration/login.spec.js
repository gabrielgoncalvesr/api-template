const request = require('supertest');
const SequelizeMock = require("sequelize-mock");

const app = require('../../src/app');

const models = require('../../database/models');

jest.mock('../../database/models/user.js', () => () => {

    const sequelizeMock = new SequelizeMock();

    return sequelizeMock.define('user', {
        id: 3,
        telephoneNumber: '11900000001',
        password: '$2b$10$nIlZ62WxfqtU.NHtnVVHlex/YkeTyRsc//DnP.zq64fO/ji4P345K',
        name: 'test',
        email: 'test@test.com',
    });
});

describe('Login Tests', () => {

    let token = null;

    beforeAll(async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                email: "gabriel@gmail.com",
                password: "123456",
            });

        token = response.body.token;
        console.log(token)
    })

    afterAll(async () => {
        await models.sequelize.close();
    })

    it('should be able to authenticate with login', async () => {
        const email = "gabriel@gmail.com";

        const response = await request(app)
            .post('/authenticate')
            .send({
                email,
                password: "123456",
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('email');
    });

    it('should be return a exception of missing password', async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                email: "gabriel@gmail.com",
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"password\" is required");
    });

    it('should be return a exception of missing email', async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                password: "123456",
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" is required");
    });

    it('should be return a exception of wrong password', async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                email: "gabriel@gmail.com",
                password: "1234561",
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("incorrect password");
    });

    it('should be return a exception of not found user', async () => {
        const response = await request(app)
            .post('/authenticate')
            .send({
                email: "error@gmail.com",
                password: "123456",
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("user not found");
    });

    it('should be able to reset password', async () => {
        const response = await request(app)
            .put('/changePassword')
            .set('Authorization', 'Bearer ' + token)
            .send({
                email: 'gabriel@gmail.com',
                password: '123456',
                newPassword: '1234567'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('password changed with success');

    });

    // it('should be return a exception of invalid email', async () => {

    //     const response = await request(app)
    //         .post('/authenticate')
    //         .send({
    //             password: "123456",
    //             email: "gabriel@gmail.com",
    //         });

    //     //     expect(response.body).toHaveProperty('error')
    //     // expect(response.body).toHaveProperty('statusCode');
    //     // expect(response.body.statusCode).toBe(400);
    //     // expect(response.body.message).toBe("\"email\" must be a valid email");

    //     expect(response.body).toHaveProperty('error')
    //     expect(response.body).toHaveProperty('statusCode');

    //     expect(response.body.message).toBe("\"email\" must be a valid email");
    // });
})