const bcrypt = require('bcrypt');

const comparePassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  if (!isMatch) {
    throw new Error('Invalid e-mail or password');
  }
  return isMatch;
};
module.exports = {
  comparePassword,
};
