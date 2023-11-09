'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.seat,{
        foreignKey: "eventID", as: "eventSeat"
      })
      this.hasMany(models.seat,{
        foreignKey: "eventID", as: "eventSeat"
      })
    }
  }
  event.init({
    eventID: {
      allowNull: false,
      autoincrement: true,
      preimaryKey: true,
      type: DataTypes.INTEGER
    },
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    venue: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};