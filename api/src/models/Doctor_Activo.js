const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo correspondiente a la tabla videogame
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo para usar como many to many Doctor-Patient
  sequelize.define('doctor_activo', {
    active: {
      type: DataTypes.BOOLEAN,
    }
  });
};