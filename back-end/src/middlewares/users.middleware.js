const bcrypt = require('bcrypt');
const { User } = require('../models');
const httpStatus = require('../utils/httpStatusCodes');
const schema = require('../validations/userValidationSchema');

const userFieldValidation = async (req, res, next) => {
  const validation = schema.validate(req.body);
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
    return res.status(httpStatus.NOT_FOUND).json({ error: 'User does not exist' });
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
  verifyUserUpdate,
  verifyUserExists,
  hashPassword,
  userFieldValidation,
};
