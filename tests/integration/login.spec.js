const request = require('supertest');
const app = require('../../src/app');

const models = require('../../database/models');

describe('Login test', () => {
    // beforeEach(async () => {
    //     await connection.migrate.rollback();
    //     await connection.migrate.latest();
    // });

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