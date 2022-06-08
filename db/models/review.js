'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      game_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      stars: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Game,  { foreignKey: 'game_id' });
    Review.belongsTo(models.User,  { foreignKey: 'user_id' });
  };
  return Review;
};
