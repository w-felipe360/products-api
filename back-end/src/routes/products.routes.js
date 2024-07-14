const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.readProducts);

productsRouter.get('/:id', productsController.readProductById);

productsRouter.post('/', productsController.createProduct);

productsRouter.put('/:id', productsController.udpateProductById);

productsRouter.delete('/:id', productsController.deleteProductById);

module.exports = productsRouter;
