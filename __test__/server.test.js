'use strict';

// Testing Requirements

//     Assert the following
//         404 on a bad route
//         404 on a bad method
//         500 if no name in the query string
//         200 if the name is in the query string
//         given an name in the query string, the output object is correct


const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('The web server', () => {
  it('gives a 404 on a bad route', async () => {
    const response = await mockRequest.put('/tacos');
    expect(response.status).toBe(404);
  });
  it('gives a 404 on a bad CRUD method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toBe(404);
  });
  it('gives a 500 if no name was given', async () => {
    const response = await mockRequest.get('/person/');
    expect(response.status).toBe(500);
  });
  it('gives a 200 is a name was given', async () => {
    const response = await mockRequest.get('/person/?name=test');
    expect(response.status).toBe(200);
  });
  it('returns the correct object for the given name', async () => {
    const response = await mockRequest.get('/person/?name=test');
    expect(response.body).toStrictEqual({"name": "test"});
  });

});
