import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const EmployeeModel = sequelize.define("Employees", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
   branch:{
    type: DataTypes.STRING,
    allowNull: false,
    },
   phone:{
    type: DataTypes.STRING,
    allowNull: false
    },
     address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idCardFront: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idCardBack: {
    type: DataTypes.STRING, 
    allowNull: true,
  }

}, {
    timestamps: true
});
