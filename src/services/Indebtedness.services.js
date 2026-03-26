import { Op } from "sequelize";
import { IndebtednessModel} from "../models/Indebtedness.Model.js";

/* =====================================
   Get All Indebtedness
===================================== */
export const getAll = async (req, res) => {
    try {
        const { search } = req.query;

        let where = {};

        // Search by employee name
        if (search) {
            where["$Employee.name$"] = {
                [Op.like]: `%${search}%`
            };
        }

        const debts = await IndebtednessModel.findAll({
            where,
            include: [
                {
                    model: Employee,
                    attributes: ["id", "name"]
                }
            ],
            order: [["date", "DESC"]]
        });

        // Calculate total debts
        let totalAmount = 0;
        debts.forEach(d => {
            totalAmount += Number(d.amount);
        });

        return res.status(200).json({
            success: true,
            count: debts.length,
            totalAmount,
            data: debts
        });

    } catch (error) {
        console.error("Get Indebtedness Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};


/* =====================================
   Create Indebtedness
===================================== */
export const create = async (req, res) => {
    try {
        const { employeeId, amount, date } = req.body;

        if (!employeeId || !amount || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const newDebt = await IndebtednessModel.create({
            employeeId,
            amount,
            date
        });

        return res.status(201).json({
            success: true,
            message: "Indebtedness created successfully",
            data: newDebt
        });

    } catch (error) {
        console.error("Create Indebtedness Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


/* =====================================
   Delete Indebtedness
===================================== */
export const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const debt = await IndebtednessModel.findByPk(id);

        if (!debt) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        await debt.destroy();

        return res.status(200).json({
            success: true,
            message: "Deleted successfully"
        });

    } catch (error) {
        console.error("Delete Indebtedness Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

