const { User } = require('../models');

const productQueryOptions = {
  attributes: ['id', 'name', 'price', 'description'],
  include: [{
    model: User,
    as: 'user',
    attributes: ['name'],
  }],
};

module.exports = productQueryOptions;
