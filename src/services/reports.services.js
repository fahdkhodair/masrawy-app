import {ReportsModel} from '../models/Reports.Model.js'
import { asyncHandler, successResponse } from "../utils/response.js";
export const searchReports = asyncHandler(async (req, res) => {
    const { date, type, employee } = req.query; // هنبعت البيانات عن طريق query params

    // بناء شرط البحث ديناميكي
    const whereClause = {};
    if (date) whereClause.date = date;
    if (type) whereClause.type = type;
    if (employee) whereClause.employee = employee;

    const reports = await ReportsModel.findAll({
        where: whereClause,
        order: [['date', 'ASC']], // ترتيب حسب التاريخ تصاعدياً
    });

    successResponse(res, 200, "Reports fetched successfully", reports);
});

