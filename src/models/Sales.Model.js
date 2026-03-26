import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const targetModel = sequelize.define("Target", {
   date: DataTypes.DATE,
    branchId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER
}, {
    timestamps: true
});