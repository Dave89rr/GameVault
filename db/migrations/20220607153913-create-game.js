'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250),
      },
      publisher: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      release_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img_url: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Games');
  },
};
