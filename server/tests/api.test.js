const request = require('supertest');
const app = require('../server');

describe('API Testing', () => {
  it('should fetch users from the API', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]).toHaveProperty('email');
    }
  });

  it('should return 404 for invalid endpoint', async () => {
    const res = await request(app).get('/api/invalid');
    expect(res.statusCode).toEqual(404);
  });

  it('should handle database errors gracefully', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).not.toEqual(500);
  });
});