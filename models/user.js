'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: "userid"}) 
  };

  // sequelize.sync(
  //   // User.create({
  //   //   // email: "fanie@mail.com"
  //   // })
  // )
  return User;
};