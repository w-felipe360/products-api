const express = require('express');
const productsController = require('../controllers/products.controller');
const productMiddlewares = require('../middlewares/products.middlewares');
const { authorizationToken } = require('../middlewares/auth.middleware');

const productsRouter = express.Router();

productsRouter.use(authorizationToken);

productsRouter.use('/:id', productMiddlewares.verifyIdExists);

productsRouter.get('/', productsController.readProducts);

productsRouter.get('/:id', productsController.readProductById);

productsRouter.post(
  '/',
  productMiddlewares.fieldValidation,
  productMiddlewares.checkProductNameExists,
  productsController.createProduct,
);

productsRouter.put(
  '/:id',
  productMiddlewares.verifyUserOwnership,
  productsController.udpateProductById,
);

productsRouter.delete(
  '/:id',
  productMiddlewares.verifyUserOwnership,
  productsController.deleteProductById,
);

module.exports = productsRouter;
