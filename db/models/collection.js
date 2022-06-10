'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    'Collection',
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Collection.associate = function (models) {
    // associations can be defined here
    Collection.belongsToMany( models.Game,  { through: 'Entry', foreignKey: 'collection_id', otherKey: 'game_id' });
    Collection.belongsTo( models.User,  { foreignKey: 'user_id' });
    Collection.hasMany( models.Entry, { foreignKey: 'collection_id', onDelete: 'CASCADE', hooks: true });
  };
  return Collection;
};
