const express = require('express');
const cors = require('cors');
const { productsRouter, usersRouter } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

module.exports = app;
