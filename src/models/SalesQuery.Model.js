import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const SalesModel = sequelize.define("Sales", {
    id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    branch:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    employee:{
        type: DataTypes.STRING,
        allowNull: false,       
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    details: {
         type: DataTypes.TEXT,
         allowNull: true
    },
}, {
    timestamps: true,
    indexes: [
        {
             tableName: 'sales',
            unique: true,
            fields: ['branch', 'employee']
        }
    ]
});
