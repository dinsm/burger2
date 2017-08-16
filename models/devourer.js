'use strict';
module.exports = function(sequelize, DataTypes) {
  var devourer = sequelize.define('devourer', {
    devourer_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return devourer;
};