'use strict';

// Logger Middleware
module.exports = (req, res, next) => {
  console.log(`Request: ${req.method} Path: ${req.path}`);
  console.log('Query:', req.query);
  console.log('Params: ', req.params);
  next();
};
