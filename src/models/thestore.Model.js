import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const theStoreModel = sequelize.define("TheStore", {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date:{
    type:DataTypes.STRING,
    allowNull:false
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
    timestamps: true
});
