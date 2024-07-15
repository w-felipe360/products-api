const jwt = require('jsonwebtoken');
const httpStatusCode = require('../utils/httpStatusCodes');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secretKey';

const createToken = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const { data } = jwt.verify(token, secret, jwtConfig);
  return data;
};

const authorizationToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(httpStatusCode.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  try {
    const valid = verifyToken(authorization);
    req.user = valid;
    return next();
  } catch (error) {
    return res.status(httpStatusCode.UNAUTHORIZED).json(
      { message: 'Expired or invalid token' },
    );
  }
};

module.exports = { createToken, verifyToken, authorizationToken };
