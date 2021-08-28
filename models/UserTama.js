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
        defaultValue: 100,
    },
    happiness: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
    },
    bladder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
    },
    date_modified: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    is_alive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    is_awake: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userTama",
  }
);

module.exports = UserTama;
