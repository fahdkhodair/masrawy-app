import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const IndebtednessModel = sequelize.define("AccountsReceivable", {
    employee:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    Amount:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey:true
    }
}, {
    timestamps: true
});