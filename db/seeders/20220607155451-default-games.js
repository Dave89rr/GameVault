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
          name: 'Human: Fall Falt',
          publisher: 'No Brakes Games',
          release_date: '2016-07-22',
          synopsis:
            'Human: Fall Flat is a puzzle-platform game developed by Tomas Sakalauskas and published by Curve Digital',
          img_url:
            'https://505games.com/wp-content/uploads/2021/02/hff752x430-1.jpg',
        },
        {
          name: 'Valorant',
          publisher: 'Riot Games',
          release_date: '2020-06-02',
          synopsis:
            'Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows',
          img_url:
            'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbd56386178af29d9/6286e274af7b396927edcd5a/Fade_Omen_1920x1080.jpg?auto=webp&disable=upscale&height=504',
        },
        {
          name: "Tom Clancy's Rainbow Six Siege",
          publisher: 'Ibisoft',
          release_date: '2015-11-26',
          synopsis:
            "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.",
          img_url:
            'https://cdn.akamai.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1647433052',
        },
        {
          name: 'Sniper Elite 5',
          publisher: 'Rebellion Developments',
          release_date: '2022-05-26',
          synopsis:
            'The latest instalment in the award-winning series, Sniper Elite 5 offers unparalleled sniping, tactical third-person combat and an enhanced kill cam.',
          img_url:
            'https://cdn.akamai.steamstatic.com/steam/apps/1029690/capsule_616x353.jpg?t=1654528999',
        },
        {
          name: 'Diablo Immortal',
          publisher: 'Blizzard Entertainment',
          release_date: '2022-06-02',
          synopsis:
            'Diablo Immortal is a free-to-play video game in the Diablo series, designed primarily for mobile devices.',
          img_url:
            'https://www.hitc.com/static/uploads/2022/06/Diablo-Immortal-early-release-and-how-to-download-on-Google-Play-iOS-1024x601.jpg',
        },
        {
          name: 'Elden Ring',
          publisher: 'Bandai Namco Entertainment',
          release_date: '2022-02-05',
          synopsis:
            'Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.',
          img_url:
            'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
        },
        {
          name: 'The Quarry',
          publisher: '2K Games, 2K Sports',
          release_date: '2022-06-10',
          synopsis:
            'The Quarry is an upcoming interactive drama horror video game developed by Supermassive Games and published by 2K Games. It is the spiritual successor to Until Dawn and is set to be released for Windows, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X and Series S',
          img_url:
            'https://upload.wikimedia.org/wikipedia/en/e/e9/The_Quarry_cover_art.jpg',
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
