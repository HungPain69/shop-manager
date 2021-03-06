'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery_Address = sequelize.define('Delivery_Address', {
    forename: DataTypes.STRING,
    surname: DataTypes.STRING,
    add1: DataTypes.STRING,
    add2: DataTypes.STRING,
    add3: DataTypes.STRING,
    postcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Delivery_Address.associate = function(models) {
    // associations can be defined here
  };
  return Delivery_Address;
};