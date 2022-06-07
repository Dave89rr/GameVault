'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Entries',
      [
        {
          game_id: '3',
          played_status_id: '1',
          collection_id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          game_id: '2',
          played_status_id: '3',
          collection_id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          game_id: '21',
          played_status_id: '4',
          collection_id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          game_id: '2',
          played_status_id: '2',
          collection_id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          game_id: '15',
          played_status_id: '5',
          collection_id: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entries', null, {});
  },
};
