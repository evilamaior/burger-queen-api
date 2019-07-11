'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {foreignKey: "userid"}),
    Orders.hasMany(models.OrderProducts, {foreignKey: "orderID"})
  };

  return Orders;
};