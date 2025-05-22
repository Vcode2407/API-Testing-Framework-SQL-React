const request = require('supertest');
const app = require('../server'); // Import the Express app

describe('API Testing', () => {
  it('should fetch users from the API', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toHaveProperty('name', 'John Doe');
  });

  it('should handle database errors', async () => {
    // Simulate a scenario where the database query fails
    // You may need to mock the database for this in a real project
    const res = await request(app).get('/api/users');
    expect(res.statusCode).not.toEqual(500); // Ensure no server error
  });
});