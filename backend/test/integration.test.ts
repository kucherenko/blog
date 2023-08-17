import request from 'supertest';
import { App } from '../src/app';

const app = new App().getApp();

describe('Integration Tests', () => {
  it('should get hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('message', 'Hello World!');
  });
});
