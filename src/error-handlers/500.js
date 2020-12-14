'use strict';

// 500 Error Handler
module.exports = function (err, req, res, next) {
  // Using an object since it will play better with our API
  const errorObj = {
    status: 500,
    message: err,
  };
  // Send a 500 and the error object
  res.status(500).json(errorObj);
};
