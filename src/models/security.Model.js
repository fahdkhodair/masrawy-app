import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const SecurityModel = sequelize.define("securities", {
  time:{
      type: DataTypes.TIME,
      allowNull: false
  },
  user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
}, {
    timestamps: true
});