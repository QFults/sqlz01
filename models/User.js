const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User
