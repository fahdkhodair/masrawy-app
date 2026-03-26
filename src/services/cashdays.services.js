import { cashDaysModel as CashDay } from "../models/Cashdays.Model.js";
import { Op } from "sequelize";
import { successResponse } from "../utils/response.js";
import { sequelize } from "../config/db.js"
// =============================
// Search Cash Days (Debugged)
// =============================
export const searchCashDays = async (req, res) => {
  try {
    const { date, branch, employee, status } = req.query;

    const whereClause = {};

    if (date) {
      whereClause.date = date; // DATEONLY يشتغل مباشرة
    }

    if (branch) whereClause.branch = branch;
    if (employee) whereClause.employee = { [Op.like]: `%${employee}%` };
    if (status) whereClause.status = { [Op.like]: `%${status}%` };

    const results = await CashDay.findAll({
      where: whereClause,
      order: [["date", "DESC"]]
    });

    return res.status(200).json({
      success: true,
      data: results
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};






