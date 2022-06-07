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
          name: 'Children of Morta',
          publisher: '11 Bit Studios',
          release_date: '2019-09-03',
          synopsis: 'Children of Morta is an action role-playing video game with roguelike elements. Developed by studio Dead Mage, it follows the story of the Bergson family, custodians of Mount Morta, who must defend it from an evil called the Corruption',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Children_of_Morta.jpg/220px-Children_of_Morta.jpg',
        },
        {
          name: 'Streets of Rogue',
          publisher: 'tinyBuild',
          release_date: '2019-07-12',
          synopsis: 'Streets of Rogue is set in a procedurally generated city consisting of several floors. In order to progress, the players will need to accomplish specific mission goals through the use of special character traits and items. After every death, new gadgets and abilities can be bought for the next session with chicken nuggets earned up to that point.',
          img_url: 'https://bleedingcool.com/wp-content/uploads/2020/04/streets-of-rogue-bar-art-900x900.jpg',
        },
        {
          name: 'Enter the Gungeon',
          publisher: 'Devolver Digital',
          release_date: '2016-04-05',
          synopsis: 'Enter the Gungeon is a bullet hell roguelike video game developed by Dodge Roll and published by Devolver Digital. The game follows four adventurers as they descend into the titular Gungeon (a firearms-themed dungeon) to find a gun that has the power to kill their past.',
          img_url: 'https://static-cdn.jtvnw.net/ttv-boxart/488632_IGDB-285x380.jpg',
        },
        {
          name: 'Super Mario Bros. 2',
          publisher: 'Nintendo',
          release_date: '1988-10-09',
          synopsis: "Super Mario Bros. 2 is a 2D side-scrolling platform game. The objective is to navigate the player's character through the dream world Subcon and defeat the main antagonist Wart.",
          img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Super_Mario_Bros_2.jpg/220px-Super_Mario_Bros_2.jpg',
        },
        {
          name: 'The Legend of Zelda: Ocarina of Time',
          publisher: 'Nintendo',
          release_date: '1998-11-21',
          synopsis: 'The Legend of Zelda: Ocarina of Time is a fantasy action-adventure game set in an expansive environment.[3] The player controls series protagonist Link from a third-person perspective in a three-dimensional world. Link primarily fights with a sword and shield, but can also use other weapons such as projectiles, bombs, and magic spells.',
          img_url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Ocarina_of_Time',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  },
};
