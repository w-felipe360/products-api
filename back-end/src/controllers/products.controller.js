const httpStatus = require('../utils/httpStatusCodes');
const productsService = require('../services/products.service');

const readProducts = async (_req, res) => {
  const products = await productsService.findAll();
  return res.status(httpStatus.OK).json(products);
};

const readProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (product.error) {
    return res.status(httpStatus.NOT_FOUND).json(result);
  }
  return res.status(httpStatus.OK).json(product);
};

const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = await productsService.createProduct(name, description, price);
  return res.status(httpStatus.OK).json(newProduct);
};

const udpateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  await productsService.updateProduct(id, name, description, price);
  return res.status(httpStatus.OK).json({ message: 'Product updated successfully' });
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  await productsService
    .deleteProduct(id);
  return res.status(httpStatus.OK).json({ message: 'Product deleted successfully' });
};

module.exports = {
  readProducts,
  readProductById,
  createProduct,
  udpateProductById,
  deleteProductById,
};
