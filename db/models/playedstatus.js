'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayedStatus = sequelize.define(
    'PlayedStatus',
    {
      status: { type: DataTypes.STRING(50), allowNull: false },
    },
    {}
  );
  PlayedStatus.associate = function (models) {
    // associations can be defined here
    PlayedStatus.belongsTo( models.Entry, { foreignKey: 'played_status_id' });
  };
  return PlayedStatus;
};
