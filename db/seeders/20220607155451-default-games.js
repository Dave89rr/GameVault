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
          name: 'Animal Crossing: New Horizons',
          publisher: 'Nintendo',
          release_date: '2020-03-20',
          synopsis: 'Animal Crossing: New Horizons[b] is a 2020 social simulation game developed and published by Nintendo for the Nintendo Switch; it is the fifth main entry in the Animal Crossing series. In New Horizons, the player controls a character who moves to a deserted island after purchasing a getaway package from Tom Nook, accomplishes assigned tasks, and develops the island as they choose.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg',
        },
        {
          name: 'Dragon Age: Origins',
          publisher: 'Electronic Arts',
          release_date: '2009-11-03',
          synopsis: 'Dragon Age: Origins is an action role-playing game and is the first in the Dragon Age franchise. The player character is recruited into the Grey Wardens, an ancient order that stands against monstrous forces known as "Darkspawn", and is tasked with defeating the Archdemon that commands them and ending their invasion.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/8/89/Dragon_Age_Origins_cover.png',
        },
        {
          name: 'Dragon Age II',
          publisher: 'Electronic Arts',
          release_date: '2011-03-08',
          synopsis: 'Dragon Age II is the second major game in the Dragon Age series and the successor to Dragon Age: Origins (2009). Set in the world of Thedas, players assume the role of Hawke, a human mage, rogue, or warrior who arrives in the city of Kirkwall as a lowly refugee, and becomes its legendary champion over a turbulent decade of political and social conflict.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/6/61/Dragon_Age_2_cover.jpg',
        },
        {
          name: 'Dragon Age: Inquisition',
          publisher: 'Electronic Arts',
          release_date: '2014-11-18',
          synopsis: 'The third major game in the Dragon Age franchise, Inquisition is the sequel to Dragon Age II (2011). The story follows a player character known as the Inquisitor on a journey to settle the civil unrest in the continent of Thedas and close a mysterious tear in the sky called the "Breach", which is unleashing dangerous demons upon the world.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Dragon_Age_Inquisition_BoxArt.jpg',
        },
        {
          name: 'The Legend of Zelda: Breath of the Wild',
          publisher: 'Nintendo',
          release_date: '2017-03-03',
          synopsis: 'The Legend of Zelda: Breath of the Wild[b] is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. The game is an installment of The Legend of Zelda series and is set at the end of its timeline. The player controls an amnesiac Link, who awakens from a hundred-year slumber, and attempts to regain his memories and prevent the destruction of Hyrule by Calamity Ganon.',
          img_url: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
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
