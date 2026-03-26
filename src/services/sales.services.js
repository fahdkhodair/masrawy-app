import { Op } from "sequelize";
import { SalesModel } from "../models/SalesQuery.Model.js";
import { successResponse,errorResponse} from "../utils/response.js";

/* ==============================
   1️⃣ Create Sale
============================== */
export const createSale = async (req, res) => {
    try {
        const { date, branch, employee, type, details  } = req.body;

        if (!branch || !employee ) {
            return errorResponse(res, {
                status: 400,
                message: "Branchid, employeeid  are required"
            });
        }

        const sale = await SalesModel.create({
           date,
           branch,
           employee,
           type,
           details
        });

    return successResponse(res, 201, "Sale created successfully", sale);

    } catch (error) {
        console.error("Create Sale Error:", error);

        return errorResponse(res, 400, "branch, employee, and type are required");

    }
};



/* ==============================
   2️⃣ Get Sales
============================== */
export const getSales = async (req, res) => {
    try {
        const {
            search,
            type,
            from,
            to,
            page = 1,
            limit = 10
        } = req.query;

        const where = {};

        // 🔍 Search
        if (search) {
            where[Op.or] = [
                { branch: { [Op.like]: `%${search}%` } },
                { employee: { [Op.like]: `%${search}%` } }, // كان فيها خطأ employees
                { details: { [Op.like]: `%${search}%` } }
            ];
        }

        // 📌 Filter by type
        if (type && type !== "الكل") {
            where.type = type;
        }

        // 📅 Date filter
        if (from && to) {
            where.createdAt = {
                [Op.between]: [new Date(from), new Date(to)]
            };
        }

        const parsedPage = parseInt(page);
        const parsedLimit = parseInt(limit);
        const offset = (parsedPage - 1) * parsedLimit;

        const { rows, count } = await SalesModel.findAndCountAll({
            where,
            limit: parsedLimit,
            offset,
            order: [["createdAt", "DESC"]]
        });

        return successResponse(res,200,{
            message: "Sales fetched successfully",
            data: {
                totalOperations: count,
                totalPages: Math.ceil(count / parsedLimit),
                currentPage: parsedPage,
                sales: rows
            }
        });

    } catch (error) {
        console.error("Get Sales Error:", error);
        return errorResponse(res, 400, "branch, employee, and type are required");
    }
};


/* ==============================
   3️⃣ Delete Sale
============================== */
export const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;

        const sale = await SalesModel.findByPk(id);

        if (!sale) {
            return errorResponse(res, {
                status: 404,
                message: "Sale not found"
            });
        }

        await sale.destroy();

        return successResponse(res,204, {
            message: "Sale deleted successfully"
        });

    } catch (error) {
        console.error("Delete Sale Error:", error);
        return errorResponse(res, {
            status: 500,
            message: error.message
        });
    }
};



