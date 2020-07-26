const request = require('supertest');

const app = require('../../../src/app.js');

describe('Password Reset Request', () => {
    it('should be return a exception of missing email', async () => {
        const response = await request(app).post('/passwordResetRequest').send({ email: 'error@gmail.net' });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("\"email\" must be valid");
    });

    it('should be return a exception of user not found', async () => {
        const response = await request(app).post('/passwordResetRequest').send({ email: 'error@gmail.com' });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('user not found');
    });

    it('should be return a exception of user not found', async () => {
        const response = await request(app).post('/passwordResetRequest').send({ email: 'test@test.com' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('email sent with success');
    });
})