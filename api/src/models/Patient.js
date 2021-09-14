const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) =>{
  sequelize.define('patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre no debe estar vacio"
        },
        isAlpha: {
          msg: "El nombre debe ser exclusivamente caracteres alfabéticos",
        }
      }
    },
  });
}