'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Reviews', [
    {
      game_id: 1,
      user_id: 1,
      content: "This game made me blow chunks, awful",
      stars: 1,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 1,
      user_id: 2,
      content: "Too sick, way better than the last one",
      stars: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 2,
      user_id: 3,
      content: "I was not a fan, but it’s because I have terrible taste",
      stars: 2,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 2,
      user_id: 1,
      content: "Wow, most innovative game everrrrrrrr",
      stars: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 3,
      user_id: 1,
      content: "This game make-a me lose my mind!! SO much fun!!1 ",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 3,
      user_id: 3,
      content: "Meh",
      stars: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 4,
      user_id: 3,
      content: "Yaaaaas love Tom Clancy <3",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 4,
      user_id: 1,
      content: "Wow, most innovative game everrrrrrrr",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 5,
      user_id: 3,
      content: "I was not a fan, but it’s because I have terrible taste",
      stars: 2,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 5,
        user_id: 1,
      content: "This game make-a me wanna slap my mama lol",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 6,
      user_id: 3,
      content: "Diablo 5eveeerrrrrrr loml lol",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 6,
      user_id: 1,
      content: "Too brutal, love it!! Taking one star off bc graphics could be better :p",
      stars: 4,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 7,
      user_id: 3,
      content: "This game is WAY too hard and ANYONE who is good at it is either a CHEATER or has NO LIFE !! yes I’m a hater lol",
      stars: 2,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 7,
      user_id: 1,
      content: "The graphics, the story, the subtleties… truly a masterpiece, also I want to smooch Radahn",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 8,
      user_id: 2,
      content: "Still too early to tell how I feel, interesting game so far though",
      stars: 3,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 8,
      user_id: 1,
      content: "Now this, this here is a game. This here is a gamer’s game alrighhhhhtt",
      stars: 5,
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      game_id: 9,
      user_id: 2,
      content: "Cloud is the best ever! Cloud x Sephiroth are the best couple in the RPG games. Thank you Squre Enix!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 9,
      user_id: 1,
      content: "I am a Cloud x Alice person to be honest, the interaction and conversation between these two are just so cute!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 10,
      user_id: 1,
      content: "DLC 5.0 is the best story compare to all other DLCs, haven’t finish 6.0 but really enjoys the world of the Ancients. Btw, it’s so exciting to meet Emet agian",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 10,
      user_id: 3,
      content: "I love 3.0 the most, I think the plot in 6.0 is a little bit too long and scattered around",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 11,
      user_id: 1,
      content: "Like the presentation and the story, but it just too hard for me to play, even in the easy mode",
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 11,
      user_id: 2,
      content: "extraordinary gaming experience, love the story. Lead me into a different culture. Always like the concept of samurai",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 12,
        user_id: 3,
      content: "To be honest, I feel like the card game inside is better that the main story itself, take me some time to figure out what the story is",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 12,
      user_id: 1,
      content: "Awesome and stunning! Such a masterpiece in so many ways. The music, the story and the presentation!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 13,
      user_id: 2,
      content: "super relaxing, you can even get married with the NPCs (only if you know what they like)",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 13,
      user_id: 3,
      content: "When I have nothing to do, I will open stardew valley to spend my day in the little town. Love fishing the most",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 14,
      user_id: 3,
      content: "Met a tons of new friend in the island. Visit my island next time, but the way, why the cabbage so expensive?",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 14,
      user_id: 1,
      content: "I bought the game because all my friends recommend it. We celebrate my 21st birthday on my island. A good place to meet friends during the pandemic",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 15,
      user_id: 2,
      content: "It is hard for me to play, can someone show me how? I really want to master this game!",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 15,
      user_id: 3,
      content: "I just love the game so much! If there is anyone have not tried this game yet, I will literally cry ok?",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 16,
      user_id: 1,
      content: "Even though you have not played one. This one is still a complete story. No worries guys",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 16,
      user_id: 2,
      content: "I love the story, it reminds me of my childhood dreams. Definitely recommend!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 17,
      user_id: 1,
      content: "This is one of the best RPG games I’ve played!",
      stars: 5,
      createdAt: new Date() ,
      updatedAt: new Date()
    },
    {
      game_id: 17,
      user_id: 2,
      content: "A solid entry to the Dragon Age series, but Origins will always have my heart",
      stars: 4,
      createdAt: new Date() ,
      updatedAt: new Date()
    },
    {
      game_id: 17,
      user_id: 1,
      content: "This is one of the best RPG games I’ve played!",
      stars: 5,
      createdAt: new Date() ,
      updatedAt: new Date()
    },
    {
      game_id: 17,
      user_id: 2,
      content: "A solid entry to the Dragon Age series, but Origins will always have my heart",
      stars: 4,
      createdAt: new Date() ,
      updatedAt: new Date()
    },
    {
      game_id: 18,
      user_id: 1,
      content: "I clocked over 200 hours within about a week after release. Needless to say, a very good game!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 18,
      user_id: 3,
      content: "I love RPG’s and I love any Legend of Zelda game. This is a win-win!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 19,
      user_id: 1,
      content: "A very, very, very cool game",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 19,
      user_id: 3,
      content: "Meh, not my type of game.",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 20,
      user_id: 1,
      content: "This game is AAAAAMAZING",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 20,
      user_id: 2,
      content: "This game is stupid fun",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 21,
      user_id: 3,
      content: "Prob the best game I’ve played in a while",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 21,
      user_id: 1,
      content: "Suuuuuuuper fun!!!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 22,
      user_id: 1,
      content: "I mean c’mon, the NOSTALGIA?! 10 outta 10.",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 22,
      user_id: 2,
      content: "Hands down my fave Super Mario game",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      game_id: 23,
      user_id: 1,
      content: "Just those sweet ocarina tunes alone make this game 5/5 stars",
      stars: 5,
      createdAt: new Date() ,
      updatedAt: new Date()
    },
    {
      game_id: 23,
      user_id: 3,
      content: "THE BEST Legend of Zelda game!!!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
