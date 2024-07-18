const express = require('express');
const { authorizationToken } = require('../middlewares/auth.middleware');
const usersControllers = require('../controllers/users.controller');
const { hashPassword, checkEmailUniqueness,
  createLoginValidation,
  verifyUserUpdate, editUserValidation,
  userLoginValidation } = require('../middlewares/users.middleware');

const usersRouter = express.Router();

usersRouter.get('/', authorizationToken, usersControllers.readUsers);
usersRouter.get('/:id', authorizationToken, usersControllers.getUserById);
usersRouter.post(
  '/',
  createLoginValidation,
  checkEmailUniqueness,
  hashPassword,
  usersControllers.createUser,
);
usersRouter.post(
  '/login',
  userLoginValidation,
  usersControllers.loginUser,
);
usersRouter.delete(
  '/:id',
  authorizationToken,
  verifyUserUpdate,
  usersControllers.deleteUser,
);
usersRouter.put(
  '/:id',
  editUserValidation,
  authorizationToken,
  verifyUserUpdate,
  usersControllers.updateUser,
);

module.exports = usersRouter;
