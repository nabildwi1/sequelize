'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey: 'useerID'})
      this.belongsTo(models.user, {foreignKey: 'eventID'})
      this.belongsTo(models.user, {foreignKey: 'seatID'})
    }
  }
  ticket.init({
    ticketID: {
      allowNull: false,
      autoincrement: true,
      preimaryKey: true,
      type: DataTypes.INTEGER
    },
    eventID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    seatID: DataTypes.INTEGER,
    bookedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};