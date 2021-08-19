const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserTama extends Model {}

UserTama.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    tama_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tama",
        key: "id",
      },
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hunger: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    happiness: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bladder: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date_modified: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = UserTama;
