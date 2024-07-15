const { User } = require('../models');
const { comparePassword } = require('../utils/encrypt');
const { createToken } = require('../middlewares/auth.middleware');

const findAll = async () => {
  const products = await User.findAll({
    attributes: { exclude: ['password', 'udpatedAt'] } });
  return products;
};

const getById = async (id) => {
  const user = await User.findByPk(+id, {
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  });
  return user;
};

const createUser = async ({ name, email, password }) => {
  const newUser = await User.create({ name, email, password });
  const token = createToken(newUser.dataValues);
  return token;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  await comparePassword(password, user.password);
  const token = createToken(user.dataValues);
  return token;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(+id);
  await user.destroy();
};

module.exports = {
  findAll,
  getById,
  createUser,
  login,
  deleteUser,
};
