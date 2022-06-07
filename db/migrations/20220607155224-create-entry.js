'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Games' },
      },
      played_status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'PlayedStatuses' },
      },
      collection_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Collections' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entries');
  },
};
