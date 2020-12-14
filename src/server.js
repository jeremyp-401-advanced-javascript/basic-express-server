'use strict';

/* Modules */
const express = require('express');
const app = express();

// Express JSON parser
app.use(express.json());

/* Middleware */
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');

/* Route Handlers */
const routeMiddleware = [logger, validator];
app.get('/person', routeMiddleware, (req, res, next) => {
  let personObj = { name: req.query.name };
  res.status(200).json(personObj);
});

// Log all routes
app.use(logger);

/* Error Handlers */

app.use('*', notFoundHandler); // For 404 errors
app.use(errorHandler); // For 500 errors

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Port is missing'); }
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  },
};