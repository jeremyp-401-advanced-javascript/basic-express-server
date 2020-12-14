'use strict';

// Validator Middleware
module.exports = (req, res, next) => {
  const name = req.query.name;
  if (!name) {
    next('A name is required!'); // Throw a 500 error
  } else {
    next(); // Pass to next middleware
  }
};
