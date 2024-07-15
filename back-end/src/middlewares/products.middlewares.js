const schema = require('../validations/productValidationSchema');
const httpStatus = require('../utils/httpStatusCodes');
const { getById } = require('../services/products.service');
const { Product } = require('../models');

const fieldValidation = async (req, res, next) => {
  const validation = schema.validate(req.body);
  if (validation.error) {
    return res.status(httpStatus.BAD_REQUEST)
      .json({ message: validation.error.details[0].message });
  }
  next();
};
const checkProductNameExists = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.user;
  const product = await Product.findOne({ where: { name, userId: id } });
  if (product) {
    return res.status(httpStatus.CONFLICT)
      .json({ message: 'You already have a product with this name.' });
  }
  next();
};
const verifyUserOwnership = async (req, res, next) => {
  const userId = req.user.id;
  const productId = req.params.id;
  const own = await Product.findOne({ where: { id: productId, userId } });
  if (!own) {
    return res.status(httpStatus.FORBIDDEN)
      .json({ message: 'You are not authorized to perform this action on this product' });
  }
  next();
};

const verifyIdExists = async (req, res, next) => {
  const { id } = req.params;
  const product = await getById(id);
  if (!product) {
    return res.status(httpStatus.NOT_FOUND)
      .json({ message: 'Product does not exist' });
  }
  next();
};

module.exports = {
  verifyUserOwnership,
  fieldValidation,
  verifyIdExists,
  checkProductNameExists,
};
