'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('sequelize'); // fro literal CURRENT_TIMESTAMP

module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isTitleCased(value) {
          if (!/^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(value)) {
            throw new Error('Name must be Title Cased.');
          }
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        len: [0, 240]
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
    tableName: 'Insects',
    timestamps: true
  });
  return Insect;
};
