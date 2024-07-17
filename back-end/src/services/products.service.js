const { Product } = require('../models');
const productQueryOptions = require('../utils/productQueryOptions');

const findAll = async () => {
  const products = await Product.findAll(productQueryOptions);
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(+id, productQueryOptions);
  return product;
};

const findByName = async (name) => {
  const product = await Product.findOne({ where: { name } });
  return product;
};

const createProduct = async (data, user) => {
  const newProduct = await Product.create({ ...data, userId: user.id });
  const response = {
    name: newProduct.name,
    description: newProduct.description,
    price: newProduct.price,
    userId: user.name,
  };
  return response;
};
const updateProduct = async (id, name, description, price) => {
  await Product.update({ name, description, price }, {
    where: { id: +id },
  });
};
const deleteProduct = async (id) => {
  await Product.destroy({
    where: { id: +id },
  });
};

module.exports = {
  findAll,
  getById,
  findByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
