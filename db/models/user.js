'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING.BINARY, allowNull: false },
      icon: { type: DataTypes.STRING, allowNull: true },
      bio: { type: DataTypes.TEXT, allowNull: true },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany( models.Collection, { foreignKey: 'user_id' });
    
  };
  return User;
};
