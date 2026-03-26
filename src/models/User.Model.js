import {DataTypes} from "sequelize";
import {sequelize} from "../config/db.js";
export const UserModel = sequelize.define("User",{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
},{
    timestamps:true
});
