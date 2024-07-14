const { Product } = require('../models');

const findAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(+id);
  return product;
};

const findByName = async (name) => {
  const product = await Product.findOne({ where: { name } });
  return product;
};

const createProduct = async (name, description, price) => {
  const newProduct = await Product.create({ name, description, price });
  return newProduct;
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
