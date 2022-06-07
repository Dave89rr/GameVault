'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'PlayedStatuses',
      [
        {
          status: 'Want to Play',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'Currently Playing',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'Want to buy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'Played through',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: '100% Achievements',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlayedStatuses', null, {});
  },
};
