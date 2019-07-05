'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {foreignKey: "productID"})
  };

  // sequelize.sync(
  //   // Products.create({
  //   //   name: "Café americano",
  //   //   price: 5
  //   // }),
  // )
  return Products;
};