'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filmes_e_atores', {
      atorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'atores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        field: 'ator_id'
      },
      filmeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'filmes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        field: 'filme_id'
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('filmesEAtores');
  }
};
