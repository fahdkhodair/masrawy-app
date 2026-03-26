import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const ReportsModel = sequelize.define("Reports", {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    employee:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    details:{
    type: DataTypes.STRING,
    allowNull: false
    },
}, {
    timestamps: true
});