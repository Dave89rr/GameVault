'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Games',
      [
        // David
        {
          name: 'Deus Ex: Human Revolution',
          publisher: 'Square Enix',
          release_date: '2011-08-23',
          synopsis:
            "Deus Ex: Human Revolution is an action role-playing game developed by Eidos Montréal and published by Square Enix's European subsidiary in August 2011 for Windows, PlayStation 3, and Xbox 360.",
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/0/06/Deus_Ex_Human_Revolution_cover.jpg',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        // Jaiqi
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        // Amy
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        // Angie
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
        {
          name: '',
          publisher: '',
          release_date: '',
          synopsis: '',
          img_url: '',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  },
};
