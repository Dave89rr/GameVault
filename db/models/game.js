'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    'Game',
    {
      name: { type: DataTypes.STRING(250), allowNull: false },
      publisher: { type: DataTypes.STRING(100), allowNull: false },
      release_date: { type: DataTypes.DATE, allowNull: false },
      synopsis: { type: DataTypes.TEXT, allowNull: false },
      img_url: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Game.associate = function (models) {
    // associations can be defined here
  };
  return Game;
};
