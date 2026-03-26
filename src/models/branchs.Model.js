import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const branchsModel = sequelize.define("Branchs", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});