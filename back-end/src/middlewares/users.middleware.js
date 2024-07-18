const bcrypt = require('bcrypt');
const { User } = require('../models');
const httpStatus = require('../utils/httpStatusCodes');
const schema = require('../validations/userValidationSchema');

const createLoginValidation = async (req, res, next) => {
  const validation = schema.userSchema.validate(req.body);
  if (validation.error) {
    return res.status(httpStatus.BAD_REQUEST)
      .json({ message: validation.error.details[0].message });
  }
  next();
};
const userLoginValidation = async (req, res, next) => {
  const validation = schema.loginSchema.validate(req.body);
  if (validation.error) {
    return res.status(httpStatus.BAD_REQUEST)
      .json({ message: validation.error.details[0].message });
  }
  next();
};
const editUserValidation = async (req, res, next) => {
  const validation = schema.editUserSchema.validate(req.body);
  if (validation.error) {
    return res.status(httpStatus.BAD_REQUEST)
      .json({ message: validation.error.details[0].message });
  }
  next();
};
const checkEmailUniqueness = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(httpStatus.BAD_REQUEST).json({ error: 'User already registered' });
  }
  next();
};
const verifyUserExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const erro = new Error('User does not exist');
    erro.message = 'User does not exist';
    return res.status(httpStatus.NOT_FOUND).json(erro);
  }
  next();
};
const hashPassword = async (req, res, next) => {
  try {
    if (req.body.password) {
      const saltRounds = 10;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    next();
  } catch (error) {
    next(error);
  }
};
const verifyUserUpdate = async (req, res, next) => {
  const { id } = req.user;
  const me = await User.findOne({ where: { id } });
  if (!me) {
    return res.status(httpStatus.FORBIDDEN)
      .json({ message: 'You are not authorized to perform this action' });
  }
  next();
};

module.exports = {
  checkEmailUniqueness,
  userLoginValidation,
  editUserValidation,
  verifyUserUpdate,
  verifyUserExists,
  hashPassword,
  createLoginValidation,
};
