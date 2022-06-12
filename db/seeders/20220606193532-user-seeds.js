'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'JohnDoe',
          email: 'jd@gmail.com',
          password:
            '$2a$12$VsrHKlufHtd/jrLIRTQDK.d3PVYqLZIUCCw.yCVmSn4Gn56IBVu/2',
          icon: '/media/icons/icon1.png',
          bio: 'Most common man on earth',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'GameVaultAdmin',
          email: 'admin@gamevault.com',
          password:
            '$2a$12$VsrHKlufHtd/jrLIRTQDK.d3PVYqLZIUCCw.yCVmSn4Gn56IBVu/2',
          icon: '/media/icons/icon1.png',
          bio: 'OG Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'DemoUser2',
          email: 'someemail@mail.com',
          password:
            '$2a$12$VsrHKlufHtd/jrLIRTQDK.d3PVYqLZIUCCw.yCVmSn4Gn56IBVu/2',
          icon: '/media/icons/icon1.png',
          bio: "Demo account's collections",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
