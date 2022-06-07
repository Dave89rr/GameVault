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
          name: 'Final Fantasy VII Remake',
          publisher: 'Square Enix',
          release_date: '2020-04-10',
          synopsis: "Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix. It is the first in a planned series of games remaking the 1997 PlayStation game Final Fantasy VII. Set in the dystopian cyberpunk metropolis of Midgar, players control mercenary Cloud Strife.",
          img_url: 'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png',
        },
        {
          name: 'Final Fantasy XIV',
          publisher: 'Square Enix',
          release_date: '2010-09-30',
          synopsis: "Final Fantasy XIV was a 2010 massively multiplayer online role-playing game for Microsoft Windows, developed and published by Square Enix. It was the original version of the fourteenth entry in the main Final Fantasy series and the second MMORPG in the series after Final Fantasy XI.",
          img_url: 'https://upload.wikimedia.org/wikipedia/en/4/45/Final_Fantasy_XIV_box_art.jpg',
        },
        {
          name: 'Ghost of Tsushima',
          publisher: 'Sony Interactive Entertainment',
          release_date: '2020-07-17',
          synopsis: 'Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg',
        },
        {
          name: 'The Witcher 3: Wild Hunt',
          publisher: 'CD Projekt',
          release_date: '2015-05-19',
          synopsis: 'The Witcher 3: Wild Hunt[a] is an action role-playing video game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective. The games are based on The Witcher series of fantasy novels written by Andrzej Sapkowski.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
        },
        {
          name: 'Stardew Valley',
          publisher: 'ConcernedApe',
          release_date: '2016-02-26',
          synopsis: "Stardew Valley is a simulation role-playing video game developed by Eric 'ConcernedApe' Barone. Players take the role of a character who takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley.",
          img_url: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',
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
