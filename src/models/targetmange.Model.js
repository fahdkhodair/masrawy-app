import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const targetModel = sequelize.define("Target", {
    month: {
      type: DataTypes.STRING, // February 2026
      allowNull: false
    },
    branchId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING, // PAYG+Data - WE Mix ...
      allowNull: false
    },
    target: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
}, {
    timestamps: true
});