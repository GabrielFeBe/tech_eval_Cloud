'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filmesEAtores', {
      atorId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      filmeId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('filmesEAtores');
  }
};
