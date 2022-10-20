'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
          
    });
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable('bands');
  }
};