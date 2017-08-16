'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {

    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
      tableName: 'burgers',

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgers;
};