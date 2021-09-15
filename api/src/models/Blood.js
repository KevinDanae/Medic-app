const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('blood', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Rh:{
      type: DataTypes.ENUM("positive", "negative"),
      allowNull: false,
    }
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
  })
}