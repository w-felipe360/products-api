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

const createUser = async (req) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User does not exist');
  }
  await comparePassword(password, user.password);
  const token = createToken(user.dataValues);
  return token;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(+id);
  await user.destroy();
};
const updateUser = async (id, updates) => {
  const user = await User.findByPk(+id);
  if (!user) {
    throw new Error('User not found');
  }
  await user.update(updates);
  return user.name;
};

module.exports = {
  findAll,
  getById,
  createUser,
  updateUser,
  login,
  deleteUser,
};
