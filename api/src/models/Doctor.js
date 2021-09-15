const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo correspondiente a la tabla videogame
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('doctor', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allownull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Debe completar el nombre'
        },
        isAlpha: {
          msg: 'El nombre solo debe contener caracteres alfabéticos',
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Debe completar el apellido'
        },
        isAlpha: {
          msg: 'El apellido solo debe contener caracteres alfabéticos',
        }
      }
    },
    fullname:{
        type: DataTypes.VIRTUAL,
        get: function(){
          return `${this.name} ${this.lastname}`
        }
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medical_reg: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isNum:{
          msg: 'Matricula medica debe ser un número'
        }
      }
    },
   });
};


 
