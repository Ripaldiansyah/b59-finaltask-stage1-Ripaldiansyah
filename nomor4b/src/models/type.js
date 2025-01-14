"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type.hasMany(models.Hero, { foreignKey: "typeId" });
      Type.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Type.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Type",
      tableName: "type_tb",
    }
  );
  return Type;
};
