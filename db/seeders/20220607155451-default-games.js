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
