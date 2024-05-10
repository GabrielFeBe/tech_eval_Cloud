'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      anoDeLancamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ano_de_lancamento'
      },
      estaDisponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'esta_disponivel'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('filmes');
  }
};
