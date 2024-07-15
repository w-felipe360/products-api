const schema = require('../validations/productValidationSchema');
const httpStatus = require('../utils/httpStatusCodes');
const { findByName, getById } = require('../services/products.service');

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
  const productExists = await findByName(name);
  if (productExists) {
    return res.status(httpStatus.CONFLICT)
      .json({ message: 'Product already exists.' });
  }
  next();
};

const verifyIdExists = async (req, res, next) => {
  const { id } = req.params;
  const product = await getById(id);
  if (!product) {
    return res.status(httpStatus.NOT_FOUND)
      .json({ message: 'Product don\'t exist' });
  }
  next();
};

module.exports = {
  fieldValidation,
  verifyIdExists,
  checkProductNameExists,
};
