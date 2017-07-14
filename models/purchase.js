'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    paidAmount: DataTypes.INTEGER
  }, {});

  Purchase.associate = function(models){
    Purchase.belongsTo(models.Item, {as: 'purchasedItem', foreignKey: 'itemId'})
  }
  return Purchase;
};
