'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.has0ne(models,ticket, {
        foreignKey: "seatID", as: "seatTikcket"
      })
      // define association here
      this.belongsTo(models.ticket, {
       foreignKey: 'eventID'
      })
    }
  }
  seat.init({
    seatID: {
      allowNull: false,
    autoincrement: true,
    preimaryKey: true,
    type: DataTypes.INTEGER
    },
    eventID: {
allowNull: false,
type: DataTypes.INTEGER
    },
    eventID: DataTypes.INTEGER,
    rowNum: DataTypes.STRING,
    seatNum: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};