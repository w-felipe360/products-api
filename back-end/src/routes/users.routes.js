const express = require('express');
const { authorizationToken } = require('../middlewares/auth.middleware');
const usersControllers = require('../controllers/users.controller');
const { hashPassword, checkEmailUniqueness,
  verifyUserExists, userFieldValidation,
  verifyUserUpdate } = require('../middlewares/users.middleware');

const usersRouter = express.Router();

usersRouter.get('/', authorizationToken, usersControllers.readUsers);
usersRouter.get('/:id', authorizationToken, usersControllers.getUserById);
usersRouter.post(
  '/',
  userFieldValidation,
  checkEmailUniqueness,
  hashPassword,
  usersControllers.createUser,
);
usersRouter.post(
  '/login',
  verifyUserExists,
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
  authorizationToken,
  verifyUserUpdate,
  usersControllers.updateUser,
);

module.exports = usersRouter;
