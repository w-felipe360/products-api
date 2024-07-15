const express = require('express');
const { productsRouter, usersRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

module.exports = app;
