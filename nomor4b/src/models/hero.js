"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.belongsTo(models.User, { foreignKey: "userId" });
      Hero.belongsTo(models.Type, { foreignKey: "typeId" });
    }
  }
  Hero.init(
    {
      name: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Hero",
      tableName: "heroes_tb",
    }
  );
  return Hero;
};
