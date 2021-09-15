const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) =>{
  sequelize.define('patient', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    identification:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNum:{
          msg: "la identificación debe ser un número"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
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
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El apellido no debe estar vacio"
        },
        isAlpha: {
          msg: "El apellido debe ser exclusivamente caracteres alfabéticos",
        }
      }
    },
    fullname:{
      type: DataTypes.VIRTUAL,
      get: function(){
        return `${this.name} ${this.lastname}`
      }
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "La edad no debe estar vacía"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    state:{
      type: DataTypes.ENUM("alive", "dead")
    },
    height: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un flotante"
        }
      }
    },
    weight: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un flotante"
        }
      }
    },
    plan:{
      type: DataTypes.ENUM("subsidized", "contributory"),
      allowNull: false,
    },
    status:{
      type: DataTypes.BOOLEAN, 
    }

  });
}