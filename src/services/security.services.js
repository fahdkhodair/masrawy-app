import { Op } from "sequelize";
import { SecurityModel } from "../models/security.Model.js";
import { successResponse } from "../utils/response.js";

/* =====================================
   Get All Logs (with filters)
===================================== */
export const searchSecurityLogs = async (req, res) => {
  try {
    const { user, type, details } = req.query;

    const whereClause = {};

    if (user && user !== "الكل") {
      whereClause.user = user;
    }

    if (type && type !== "الكل") {
      whereClause.type = type;
    }

    if (details) {
      whereClause.details = { [Op.like]: `%${details}%` };
    }

    const results = await SecurityModel.findAll({
      where: whereClause,
      order: [["time", "DESC"]]
    });

    return await successResponse(res, { data: results }, 200);

  } catch (error) {
    console.error("SearchSecurityLogs Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};


