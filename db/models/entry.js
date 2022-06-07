'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define(
    'Entry',
    {
      game_id: { type: DataTypes.INTEGER, allowNull: false },
      played_status_id: { type: DataTypes.INTEGER, allowNull: false },
      collection_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Entry.associate = function (models) {
    // associations can be defined here
    Entry.belongsTo( models.Game, { foreignKey: 'game_id' });
    Entry.belongsTo( models.Collection, { foreignKey: 'collection_id' });
    Entry.hasMany( models.PlayedStatus, { foreignKey: 'played_status_id' });
  };
  return Entry;
};
