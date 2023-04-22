const request = require('supertest');
const app = require('../../server');
const { expect } = require('chai');

describe('GET /', () => {
  it('Dummy unit-test: should return status 200 and a HTML page with a title, heading, and paragraph', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
    expect(response.text).to.include('<title>Calculator</title>');
    expect(response.text).to.include('<h1>Hello Jenkins!!</h1>');
    expect(response.text).to.include('<p>This is a sample web page, served via Express.</p>');
  });
});