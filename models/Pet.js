const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Pet extends Model { }

Pet.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'pet' })

module.exports = Pet
