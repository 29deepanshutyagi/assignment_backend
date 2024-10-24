import request from 'supertest';
import app from '../src/app';

describe('Authentication Tests', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        phone: '1234567890',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email');
  });
});
