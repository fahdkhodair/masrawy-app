import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const cashDaysModel = sequelize.define("CashDays", {
     date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: { // حالة التقرير
    type: DataTypes.STRING,
    allowNull: false
  },
  BSS: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  VISA: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  drawer: { // الدرَج
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  incoming: { // وارد
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  expenses: { // مصروف
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  net: { // صافي
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
}, {
    timestamps: true
});