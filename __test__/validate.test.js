'use strict';

// Worked on this in class, which was very helpful.

const validateMiddleware = require('../src/middleware/validator');

describe('Validator middleware', () => {
  it('should allow requests with a name', () => {
    let req = { query: { name: 'Name Test'} };
    let res = {};
    let next = jest.fn(); // Let jest spy on next()

    validateMiddleware(req, res, next);
    // Expect next to have no parameters
    expect(next).toHaveBeenCalledWith();
  });

  it('should reject requests without a name', () => {
    let req = { query: {} };
    let res = {};
    let next = jest.fn(); // Let jest spy on next()

    validateMiddleware(req, res, next);
    // Expect next to have our error message
    expect(next).toHaveBeenCalledWith('A name is required!');
  });
});
