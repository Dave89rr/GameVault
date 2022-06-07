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
  };
  return Collection;
};
