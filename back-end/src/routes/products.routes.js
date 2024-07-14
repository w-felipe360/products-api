const express = require('express');
const productsController = require('../controllers/productsController');
const productMiddlewares = require('../middlewares/products.middlewares');

const productsRouter = express.Router();

productsRouter.use('/:id', productMiddlewares.verifyIdExists);

productsRouter.get('/', productsController.readProducts);

productsRouter.get('/:id', productsController.readProductById);

productsRouter.post(
  '/',
  productMiddlewares.fieldValidation,
  productMiddlewares.checkProductNameExists,
  productsController.createProduct,
);

productsRouter.put('/:id', productsController.udpateProductById);

productsRouter.delete('/:id', productsController.deleteProductById);

module.exports = productsRouter;
