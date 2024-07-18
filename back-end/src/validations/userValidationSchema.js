const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().min(2).required(),
  password: Joi.string().min(2).required(),
});
const loginSchema = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(2).required(),

});
const editUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
});
module.exports = {
  userSchema,
  loginSchema,
  editUserSchema };
