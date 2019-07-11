'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Orders, {foreignKey: "orderID"}),
    OrderProducts.belongsTo(models.Products, {foreignKey: "productID"})
  };

  return OrderProducts;
};