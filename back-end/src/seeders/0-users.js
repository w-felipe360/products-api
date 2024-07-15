const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'John Doe',
        email: 'willian.salvus@vaipassar.com',
        password: await bcrypt.hash('password', salt),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'thiago@legal.com',
        password: await bcrypt.hash('password2', salt),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Willian',
        email: 'marceloramos@usuario.com',
        password: await bcrypt.hash('password3', salt),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
