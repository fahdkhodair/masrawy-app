import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const landsModel = sequelize.define("Lands", {
  statement: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false
  }
}, {
  timestamps: true
});
