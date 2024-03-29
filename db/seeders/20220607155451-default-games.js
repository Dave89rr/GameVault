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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Human: Fall Flat',
          publisher: 'No Brakes Games',
          release_date: '2016-07-22',
          synopsis:
            'Human: Fall Flat is a puzzle-platform game developed by Tomas Sakalauskas and published by Curve Digital',
          img_url:
            'https://static-cdn.jtvnw.net/ttv-boxart/492504_IGDB-272x380.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Valorant',
          publisher: 'Riot Games',
          release_date: '2020-06-02',
          synopsis:
            'Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows',
          img_url:
            'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbd56386178af29d9/6286e274af7b396927edcd5a/Fade_Omen_1920x1080.jpg?auto=webp&disable=upscale&height=504',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom Clancy's Rainbow Six Siege",
          publisher: 'Ibisoft',
          release_date: '2015-11-26',
          synopsis:
            "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.",
          img_url:
            'https://cdn.akamai.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1647433052',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sniper Elite 5',
          publisher: 'Rebellion Developments',
          release_date: '2022-05-26',
          synopsis:
            'The latest instalment in the award-winning series, Sniper Elite 5 offers unparalleled sniping, tactical third-person combat and an enhanced kill cam.',
          img_url:
            'https://bleedingcool.com/wp-content/uploads/2022/01/Sniper-Elite-5-Final-Cover-Art-900x900.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Diablo Immortal',
          publisher: 'Blizzard Entertainment',
          release_date: '2022-06-02',
          synopsis:
            'Diablo Immortal is a free-to-play video game in the Diablo series, designed primarily for mobile devices.',
          img_url:
            'https://m.media-amazon.com/images/M/MV5BZjQ4ZjBmYjctOTI3Mi00ZTY3LTgxNzMtMzMwZTcxMjA2YzNjXkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_FMjpg_UX346_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Elden Ring',
          publisher: 'Bandai Namco Entertainment',
          release_date: '2022-02-05',
          synopsis:
            'Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.',
          img_url:
            'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Quarry',
          publisher: '2K Games, 2K Sports',
          release_date: '2022-06-10',
          synopsis:
            'The Quarry is an upcoming interactive drama horror video game developed by Supermassive Games and published by 2K Games. It is the spiritual successor to Until Dawn and is set to be released for Windows, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X and Series S',
          img_url:
            'https://i.redd.it/kcy4odaz80c91.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Jaiqi
        {
          name: 'Final Fantasy VII Remake',
          publisher: 'Square Enix',
          release_date: '2020-04-10',
          synopsis:
            'Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix. It is the first in a planned series of games remaking the 1997 PlayStation game Final Fantasy VII. Set in the dystopian cyberpunk metropolis of Midgar, players control mercenary Cloud Strife.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Final Fantasy XIV',
          publisher: 'Square Enix',
          release_date: '2010-09-30',
          synopsis:
            'Final Fantasy XIV was a 2010 massively multiplayer online role-playing game for Microsoft Windows, developed and published by Square Enix. It was the original version of the fourteenth entry in the main Final Fantasy series and the second MMORPG in the series after Final Fantasy XI.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/4/45/Final_Fantasy_XIV_box_art.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ghost of Tsushima',
          publisher: 'Sony Interactive Entertainment',
          release_date: '2020-07-17',
          synopsis:
            'Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Witcher 3: Wild Hunt',
          publisher: 'CD Projekt',
          release_date: '2015-05-19',
          synopsis:
            'The Witcher 3: Wild Hunt[a] is an action role-playing video game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective. The games are based on The Witcher series of fantasy novels written by Andrzej Sapkowski.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Stardew Valley',
          publisher: 'ConcernedApe',
          release_date: '2016-02-26',
          synopsis:
            "Stardew Valley is a simulation role-playing video game developed by Eric 'ConcernedApe' Barone. Players take the role of a character who takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley.",
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Amy
        {
          name: 'Animal Crossing: New Horizons',
          publisher: 'Nintendo',
          release_date: '2020-03-20',
          synopsis:
            'Animal Crossing: New Horizons[b] is a 2020 social simulation game developed and published by Nintendo for the Nintendo Switch; it is the fifth main entry in the Animal Crossing series. In New Horizons, the player controls a character who moves to a deserted island after purchasing a getaway package from Tom Nook, accomplishes assigned tasks, and develops the island as they choose.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dragon Age: Origins',
          publisher: 'Electronic Arts',
          release_date: '2009-11-03',
          synopsis:
            'Dragon Age: Origins is an action role-playing game and is the first in the Dragon Age franchise. The player character is recruited into the Grey Wardens, an ancient order that stands against monstrous forces known as "Darkspawn", and is tasked with defeating the Archdemon that commands them and ending their invasion.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/8/89/Dragon_Age_Origins_cover.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dragon Age II',
          publisher: 'Electronic Arts',
          release_date: '2011-03-08',
          synopsis:
            'Dragon Age II is the second major game in the Dragon Age series and the successor to Dragon Age: Origins (2009). Set in the world of Thedas, players assume the role of Hawke, a human mage, rogue, or warrior who arrives in the city of Kirkwall as a lowly refugee, and becomes its legendary champion over a turbulent decade of political and social conflict.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/6/61/Dragon_Age_2_cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dragon Age: Inquisition',
          publisher: 'Electronic Arts',
          release_date: '2014-11-18',
          synopsis:
            'The third major game in the Dragon Age franchise, Inquisition is the sequel to Dragon Age II (2011). The story follows a player character known as the Inquisitor on a journey to settle the civil unrest in the continent of Thedas and close a mysterious tear in the sky called the "Breach", which is unleashing dangerous demons upon the world.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/c/ce/Dragon_Age_Inquisition_BoxArt.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Legend of Zelda: Breath of the Wild',
          publisher: 'Nintendo',
          release_date: '2017-03-03',
          synopsis:
            'The Legend of Zelda: Breath of the Wild[b] is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. The game is an installment of The Legend of Zelda series and is set at the end of its timeline. The player controls an amnesiac Link, who awakens from a hundred-year slumber, and attempts to regain his memories and prevent the destruction of Hyrule by Calamity Ganon.',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Angie
        {
          name: 'Children of Morta',
          publisher: '11 Bit Studios',
          release_date: '2019-09-03',
          synopsis:
            'Children of Morta is an action role-playing video game with roguelike elements. Developed by studio Dead Mage, it follows the story of the Bergson family, custodians of Mount Morta, who must defend it from an evil called the Corruption',
          img_url:
            'https://techraptor.net/sites/default/files/styles/image_header/public/imports/2019/06/children-of-morta-demo-available-for-free-on-steam-now.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Streets of Rogue',
          publisher: 'tinyBuild',
          release_date: '2019-07-12',
          synopsis:
            'Streets of Rogue is set in a procedurally generated city consisting of several floors. In order to progress, the players will need to accomplish specific mission goals through the use of special character traits and items. After every death, new gadgets and abilities can be bought for the next session with chicken nuggets earned up to that point.',
          img_url:
            'https://bleedingcool.com/wp-content/uploads/2020/04/streets-of-rogue-bar-art-900x900.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Enter the Gungeon',
          publisher: 'Devolver Digital',
          release_date: '2016-04-05',
          synopsis:
            'Enter the Gungeon is a bullet hell roguelike video game developed by Dodge Roll and published by Devolver Digital. The game follows four adventurers as they descend into the titular Gungeon (a firearms-themed dungeon) to find a gun that has the power to kill their past.',
          img_url: 'https://static.tvtropes.org/pmwiki/pub/images/etg.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Super Mario Bros. 2',
          publisher: 'Nintendo',
          release_date: '1988-10-09',
          synopsis:
            "Super Mario Bros. 2 is a 2D side-scrolling platform game. The objective is to navigate the player's character through the dream world Subcon and defeat the main antagonist Wart.",
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Super_Mario_Bros_2.jpg/220px-Super_Mario_Bros_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Legend of Zelda: Ocarina of Time',
          publisher: 'Nintendo',
          release_date: '1998-11-21',
          synopsis:
            'The Legend of Zelda: Ocarina of Time is a fantasy action-adventure game set in an expansive environment.[3] The player controls series protagonist Link from a third-person perspective in a three-dimensional world. Link primarily fights with a sword and shield, but can also use other weapons such as projectiles, bombs, and magic spells.',
          img_url:
            'https://m.media-amazon.com/images/M/MV5BZjVkYjdlNGQtZWY3ZS00MDIwLTgwOTItYWE4NTBjZTgwZTczXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  },
};
