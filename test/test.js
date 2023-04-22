const request = require('supertest');
const app = require('../server');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return status 200 and a HTML page with a title, heading, and paragraph', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });
});