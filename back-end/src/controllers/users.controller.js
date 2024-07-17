const httpStatus = require('../utils/httpStatusCodes');
const usersService = require('../services/users.service');

const readUsers = async (req, res) => {
  const users = await usersService.findAll();
  return res.status(httpStatus.OK).json(users);
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.status(httpStatus.OK).json(user);
};
const createUser = async (req, res) => {
  try {
    await usersService.createUser(req);
    res.status(httpStatus.CREATED).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const token = await usersService.login(req.body);
    res.status(httpStatus.OK).json({ token });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    await usersService.deleteUser(req.user.id);
    res.status(httpStatus.OK).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await usersService.updateUser(id, req.body);
    res.status(httpStatus.OK).json({ message: 'user updated to:', updatedUser });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};
module.exports = {
  readUsers,
  getUserById,
  createUser,
  updateUser,
  loginUser,
  deleteUser,
};
