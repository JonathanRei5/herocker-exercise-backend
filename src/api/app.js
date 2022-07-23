const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

const corsOptions = {
  origin: 'https://heroku-frontend-123.herokuapp.com',
};

app.use(cors(corsOptions));

app.get('/users', rescue(UserController));

app.use(errorMiddleware); 

module.exports = app;
