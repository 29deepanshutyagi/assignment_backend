import request from 'supertest';
import app from '../src/app';

describe('Expense Tests', () => {
  it('should add a new expense', async () => {
    const token = 'YOUR_JWT_TOKEN'; // Add a valid JWT token
    const res = await request(app)
      .post('/expenses/add')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description: 'Dinner',
        totalAmount: 50,
        splits: [
          { userId: 1, amount: 25, splitType: 'EQUAL' },
          { userId: 2, amount: 25, splitType: 'EQUAL' }
        ]
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
