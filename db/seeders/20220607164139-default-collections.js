'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Collections',
      [
        {
          user_id: '1',
          description: 'RPG Games',
          name: 'My RPG Collection',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: '2',
          description: 'FPS Games',
          name: 'My FPS Game Collection',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: '1',
          description: 'Puzzle games i want to buy',
          name: 'Tons of Puzzels',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: '2',
          description: 'Horror Games',
          name: 'Oh the Horror',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: '1',
          description: 'Board Games',
          name: 'Are you board?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: '2',
          description: 'All the fantasy one can find',
          name: 'Final Fantasy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Collections', null, {});
  },
};
