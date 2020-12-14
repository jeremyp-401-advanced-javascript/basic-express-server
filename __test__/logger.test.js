const loggerMiddleware = require('../src/middleware/logger.js');

describe('Logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // Allow jest to spy on next()

  beforeEach(() => {
    // Attach jest's spy to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Put the console back (I'm not quite sure I get this...)
    consoleSpy.mockRestore();
  });

  it('properly logs something', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('passes to the next middleware', () => {
    loggerMiddleware(req, res, next);
    // Make sure out next() wasn't called with parameters
    expect(next).toHaveBeenCalledWith();
  });

});
