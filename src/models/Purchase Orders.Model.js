import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
export const PurchaseOrdersModel = sequelize.define("PurchaseOrders", {
     branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
    timestamps: false
});